import { useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Button from '../src/components/styled/Button';
import { Colors } from '../src/components/Theme';
import { Web3Modal, Web3Button } from '@web3modal/react'
import { useAccount} from 'wagmi'



const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {reactosNFTAddress} from '../config'

const FormEl = styled.form`
    width: 100%;
    background-color: ${Colors.White};
`;


export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const router = useRouter()
  const {isConnected} = useAccount()

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function uploadToIPFS() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      return url
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function listNFTForSale() {
    const url = await uploadToIPFS()
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    console.log("sdsdsdsd", signer)

    /* next, create the item */
    const price = ethers.utils.parseUnits(formInput.price, 'ether')
    let contract = new ethers.Contract(reactosNFTAddress, ReactosNFTMarketplace.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()
    let transaction = await contract.safeMint(url, price, { value: listingPrice })
    await transaction.wait()
   
    router.push('/reactos-marketplace')
  }

  // if (!isConnected) {
  //   return (
  //     <div>
  //       <Web3Button />
        
  //     </div>
  //   )
  // }

  return (
    <FormEl className="flex justify-center ">
     
      <div className="w-1/2 flex flex-col pb-12">
      {/* <h6>Upload NFT and automatically List to Marketplace</h6> */}
        <input 
          placeholder="Name of NFT"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
        />
        <input
          placeholder="Price in BnB"
          className="mt-2 border rounded p-4"
          
          
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        <input
          type="file"
          name="nft-image"
          className="my-4"
          onChange={onChange}
        />
        {
          fileUrl && (
            <img className="rounded mt-4" width="350" src={fileUrl} />
          )
        }
        {
          isConnected ? <Button  onClick={listNFTForSale} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Create NFT
        </Button> : <Web3Button /> 
        }
        
      </div>
    </FormEl>
  )
}
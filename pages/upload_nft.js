import { useState } from 'react'
import styled from 'styled-components'

import { useRouter } from 'next/router'
import Button from '../src/components/styled/Button';
import { Colors } from '../src/components/Theme';
import { Web3Button } from '@web3modal/react'
import { useAccount} from 'wagmi'
import Image from 'next/image';


const FormEl = styled.form`
    width: 100%;
    background-color: ${Colors.Background};
    
   
`;

const InnerForm = styled.div`
  border: 1px solid ${Colors.White};
  border-radius: 7px;
  box-shadow: 3px 6px 5px 4px #888888;


`


export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const router = useRouter()
  const {isConnected} = useAccount()

  //an attempt to push to IPFS
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

  async function listNFTForSale() {
    router.push('/marketplace')
  }

  return (
    <FormEl className="flex justify-center ">
     
      <InnerForm className="w-1/2 flex flex-col pb-12 justify-center">
      
        <input 
          placeholder="Name of NFT"
          className="mt-8 border rounded p-4 w-70 ml-5 mr-5"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="mt-2 border rounded p-4 w-70 ml-5 mr-5"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
        />
        <input
          placeholder="Price in BnB"
          className="mt-2 border rounded p-4 w-70 ml-5 mr-5"
          
          
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        <input
          type="file"
          name="nft-image"
          className="my-4 w-70 ml-5 mr-5"
          onChange={onChange}
        />
        {
          fileUrl && (
            <Image alt="image_file" className="rounded mt-4" width="350" src={fileUrl} />
          )
        }
        {
          isConnected ? <Button  onClick={listNFTForSale} className="w-70 ml-5 mr-5 font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Upload NFT
        </Button> : <Web3Button  /> 
        }
        
      </InnerForm>
    </FormEl>
  )
}
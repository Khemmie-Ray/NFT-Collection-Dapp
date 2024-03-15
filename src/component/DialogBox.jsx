import { Dialog, Text, Flex, TextField, Button } from "@radix-ui/themes"

const DialogBox = ({onclick}) => {
  console.log(onclick)
  return (
    <Dialog.Root>
  <Dialog.Trigger>
    <Button className="bg-gradient-to-r from-[magenta] to-[violet] w-[50%] mt-4" onClick={onclick}>Mint</Button>
  </Dialog.Trigger>

  <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Mint Details</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Details about the NFT to mint
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Receipient address
        </Text>
        <TextField.Input
          defaultValue="0x02333.."
          placeholder="Enter your wallet address"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Minting Fee
        </Text>
        <TextField.Input
          defaultValue="10000000000000000"
          placeholder="Enter the mint fee"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
         TokenId
        </Text>
        <TextField.Input
          defaultValue=""
          placeholder=""
        />
      </label>
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" className="bg-gradient-to-r from-gray-400 to-black text-white">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button className="bg-gradient-to-r from-[magenta] to-[violet]">Save</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
  )
}

export default DialogBox
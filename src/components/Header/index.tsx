"use client";

import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { Logo } from "../Logo";

export function Header() {
  return (
    <>
      <header className="hidden md:flex h-24 text-white bg-sky-600 items-center px-12">
        <Logo />
        <section className="flex flex-1 items-start px-12 space-x-8 font-medium text-s uppercase">
          <Link href={`/list`}>
            <span>buy</span>
          </Link>
          <Link href={`/list`}>
            <span>rent</span>
          </Link>
          <Link href={`/list`}>
            <span>new ones</span>
          </Link>
        </section>
        <section className="flex items-center space-x-8 uppercase">
          <Link href={`/wish-list`}>
            <span>my wish list</span>
          </Link>
          <LogInDialog />
        </section>
      </header>
      <header className="flex md:hidden h-24 text-white bg-sky-600 items-center px-4">
        <section className="flex items-center uppercase">
          <span>menu</span>
        </section>
        <Logo />
        <section className="flex items-center space-x-8 uppercase">
          <Link href={`/wish-list`}>
            <span>my wish list</span>
          </Link>
          <LogInDialog />
        </section>
      </header>
    </>
  );
}

function LogInDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="uppercase hover:cursor-pointer">log in</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Log In</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Please, fill in the fields and press the Log In button to log in.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Input
              defaultValue=""
              placeholder="Enter your email address"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Password
            </Text>
            <TextField.Input
              defaultValue=""
              placeholder="Enter your password"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button
              variant="soft"
              color="gray"
              className="uppercase hover:cursor-pointer"
            >
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              variant="soft"
              color="gray"
              className="uppercase hover:cursor-pointer"
            >
              Log In
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

"use client";

import { Heart, UserCircle } from "@phosphor-icons/react";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "../Logo";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 hover:cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "showModal" : "hideModal"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-black">
              <li
                key={`hamburguer-0`}
                className="border-b border-gray-600 my-8 uppercase"
              >
                <a href={`/list`} onClick={() => setIsNavOpen(false)}>
                  buy
                </a>
              </li>
              <li
                key={`hamburguer-1`}
                className="border-b border-gray-600 my-8 uppercase"
              >
                <a href={`/list`} onClick={() => setIsNavOpen(false)}>
                  rent
                </a>
              </li>
              <li
                key={`hamburguer-2`}
                className="border-b border-gray-600 my-8 uppercase"
              >
                <a href={`/list`} onClick={() => setIsNavOpen(false)}>
                  new ones
                </a>
              </li>
              <li
                key={`hamburguer-3`}
                className="border-b border-gray-600 my-8 uppercase"
              >
                <a href={`/wish-list`} onClick={() => setIsNavOpen(false)}>
                  wish list
                </a>
              </li>
            </ul>
          </div>
        </section>
        <Logo />
        <section className="hidden sm:flex items-center space-x-8 uppercase">
          <Link href={`/wish-list`}>
            <Heart size={24} weight={"fill"} color="white" />
          </Link>
          <LogInDialog />
        </section>
        <section className="flex sm:hidden items-center space-x-8 uppercase">
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
        <Button className="uppercase hover:cursor-pointer">
          <UserCircle size={28} color="white" weight="fill" />
        </Button>
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

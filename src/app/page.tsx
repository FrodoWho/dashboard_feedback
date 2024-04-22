"use client";
import { Link } from "@chakra-ui/next-js";

export default function Page() {
  return (
    <Link href="/about" color="red.400" _hover={{ color: "blue.500" }}>
      About
    </Link>
  );
}


import Counter from "@/components/Counter/Counter";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {

  return (
    <div>
      <h1 className="text-5xl text-blue-600 font-bold text-center">This is a demo NextJs Application </h1>
      <h2 className="text-center text-2xl font-semibold mt-3">ABC Logo</h2>
      <Image className="mx-auto" src="https://abcfanbd.com/images/logo/13.png" height={100} width={200} alt="ABC Logo" />
      <div className="text-center my-4">
        <Link href="/about">
          <button className="btn btn-success mr-3">
            About
          </button>
        </Link>
        <Link href="/contact">
          <button className="btn btn-success">
            Contact
          </button>
        </Link>
      </div>
      <Counter />
    </div>
  );
}


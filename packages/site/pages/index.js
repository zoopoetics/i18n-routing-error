import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href={"/products/single-cell-gene-expression"}>
            Single Cell Gene Expression
          </Link>
        </li>
        <li>
          <Link href={"/products/single-cell-immune-profiling"}>
            Single Cell Immune Profiling
          </Link>
        </li>
      </ul>
    </main>
  );
}

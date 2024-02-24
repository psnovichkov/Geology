"use client";

import Link from "next/link";

export default function Search() {
  return (
    <>
      <div>Search Options</div>
      <div className="grid md:grid-cols-3 md:gap-4">
        <div>
          <Link href="/search/map">Map</Link>
        </div>
        <div>
          <Link href="/search/filters">Filters</Link>
        </div>

        <div>
          <Link href="/search/term">Description</Link>
        </div>
      </div>
    </>
  );
}

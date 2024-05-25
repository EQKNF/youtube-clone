import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/logo.png";
import { Button } from "./Button";
import { useState } from "react";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu></Menu>
        </Button>
        <a href="/" className="flex items-center">
          <img src={logo} alt="Metube logo" className="h-6" />
          <h1 className="font-semibold">MeTube</h1>
        </a>
      </div>
      <form
        className={` gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
            type="button"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border border-l-0 border-secondary-border flex-shrink-0">
            <Search />
          </Button>
        </div>

        <Button size="icon" className="flex-shrink-0" type="button">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Search />
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>

        <Button variant="ghost" size="icon">
          <Upload />
        </Button>

        <Button variant="ghost" size="icon">
          <Bell />
        </Button>

        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
}

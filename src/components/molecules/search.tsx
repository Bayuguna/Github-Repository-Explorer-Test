import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface BSearchProps {
  className?: string;
  placeholder?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
}

const BSearch = (props: BSearchProps) => {
  //   const { className, placeholder, onChange, value } = props;
  const { placeholder = "Search" } = props;
  const [search, setSearch] = useState<string>(props.value || "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        // callMyFunction();
        if (search) props.onClick && props.onClick(search as any);
        !search ? setError("Type something to search ") : setError(null);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [search]);
  return (
    <div className="relative">
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          placeholder={placeholder}
          className=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type="button"
          onClick={() => {
            props.onClick && props.onClick(search as any);
            !search ? setError("Type something to search ") : setError(null);
          }}
        >
          <FaSearch />
        </Button>
      </div>
      {error && (
        <div className="absolute -bottom-5 left-1">
          <div className="text-xs text-gray-500 pt-1">{error}</div>
        </div>
      )}
    </div>
  );
};

export default BSearch;

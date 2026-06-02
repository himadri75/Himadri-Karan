import Container from "./Container";
import { FaRegHeart } from "react-icons/fa6";

export default function Footer() {
  const BUILD_YEAR = new Date().getFullYear()

  return (
    <footer className="border-t border-[#d6dbe1] py-10">
      <Container className="flex gap-6 sm:flex-row sm:items-center justify-between">
        <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.3em] text-[#5d6672]">
          © {BUILD_YEAR} Himadri Karan.
        </div>
      </Container>
    </footer>
  );
}

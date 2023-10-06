"use client";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
function PrevPage() {
  const router = useRouter();

  // Function to go back to the previous page
  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <Button onClick={goBack} variant="contained" size="small">
        BAck to prev page
      </Button>
    </div>
  );
}

export default PrevPage;

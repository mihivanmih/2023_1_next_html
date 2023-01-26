import Wither from "@/pages/witcher/wither";
import MainLayout from "@/layots/MainLayout";

// нужно перенести css
// передавать мелодию в компонент

export default function Home() {
  return (
    <>
        <MainLayout>
            <Wither />
        </MainLayout>
    </>
  )
}

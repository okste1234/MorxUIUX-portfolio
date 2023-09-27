import Contents from "../components/Contents"
import Header from "../components/Header"

const page = () => {
    return (
        <div className="text-black">
            <div>
                <Header />

                <Contents />
            </div>
        </div>
    )
}

export default page
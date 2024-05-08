import GearItems from "./components/GearItems";

export const metadata = {
    title: "Bugra Er | Gear",
    description: "All the tools and applications I use",
};

export default function Gear() {
    return (
        <>
            <div className="flex flex-col  gap-12 md:gap-24">
                <div className="flex flex-col gap-12 animate-in">
                    <div>
                        <h1 className="animate-in text-3xl font-bold tracking-tight">
                            Gear & Tools & Apps
                        </h1>
                        <p className="animate-in text-secondary" style={{"--index": 1}}>
                            All tools i can use
                        </p>
                    </div>
                    <p className="max-w-lg animate-in" style={{"--index": 2}}>
                        All these tools and applications make my life easier and i enjoy
                        using them.
                    </p>
                    <GearItems/>
                </div>
            </div>
        </>
    );
}

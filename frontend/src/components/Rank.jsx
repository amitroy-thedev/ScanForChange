import React from "react";

export default function Rank() {
    const otherRanks = [
        { name: "Nitish Singha", rank: "12/45" },
        { name: "Amit Sharma", rank: "15/45" },
        { name: "Rahul Verma", rank: "18/45" },
        { name: "Atish Sharma", rank: "19/45" },
        { name: "Ajoy Verma", rank: "20/45" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mt-10 mb-5">Rank</h2>
            <div className="grid md:grid-cols-1 gap-6 grid-cols-1">
                {/* Top Rank */}
                <div className="flex bg-gray-200 p-5 pr-7 rounded-sm justify-between font-semibold text-lg">
                    <span>Nitish Singha</span> 
                    <span>12/45</span>
                </div>

                {/* Other Ranks */}
                <div className="bg-gray-300 p-2 rounded-xl">
                    {otherRanks.map((user, index) => (
                        <div key={index} className="flex mb-1 bg-gray-200 p-5 pr-7 rounded-sm justify-between">
                            <span className="font-semibold">{index + 1}. {user.name}</span> 
                            <span>{user.rank}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
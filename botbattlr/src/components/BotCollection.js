import React from "react";
import BotCard from "./BotCard";

export default function BotCollection({bots}) {


    return(
        <div className="four col grid">
            <div className="row">
            {bots.map(bots => <BotCard key={bots.id} bots={bots} />)}
            </div>
            </div>
    );
}
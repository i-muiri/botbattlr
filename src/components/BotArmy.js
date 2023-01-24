import React from 'react';
import BotCard from './BotCard';

export default function BotArmy({bots, handleClick, handleDischarge}) {
 

  return (
    <div className="ui segment inverted red bot-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {bots.map(bot => <BotCard key={bot.id} bot={bot} handleDischarge={handleDischarge} handleClick={handleClick} />)}
        </div>
      </div>
    </div>
  );
}


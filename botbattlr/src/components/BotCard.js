import React from "react";

const BotCard = ({ bots, handleClick }) => {
    return (
        <div className="ui column">
          <div
            className="ui card"
            key={bots.id}
            onClick={() => handleClick(bots.id)}
          >
            <div className="image">
              <img alt="oh no!" src={bots.avatar_url} />
            </div>
            <div className="content">
              <div className="header">
                {bots.name}
                {/* <i className={botsTypeClasses[bots.bots_class]} /> */}
              </div>
              <div className="meta text-wrap">
                <small>{bots.catchphrase}</small>
              </div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat" />
                {bots.health}
              </span>
    
              <span>
                <i className="icon lightning" />
                {bots.damage}
              </span>
              <span>
                <i className="icon shield" />
                {bots.armor}
              </span>
              <span>
                <div className="ui center aligned segment basic">
                  <button
                    className="ui mini red button"
                    onClick={() =>
                      console.log("add code to connect event listener")
                    }
                  >
                    x
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      );
    }
    
    export default BotCard;
import React from 'react'

const Player_table = ({players}) => {
console.log(players.slice(0,5))
  return (

    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Goals</th>
                    <th>Assist</th>
                    <th>Team</th>
                    <th>Pos</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player,index) => (                
                    <tr key={index}>
                        <th>{player.player}</th>
                        <th>{player.goals}</th>
                        <th>{player.assists}</th>
                        <th>{player.team}</th>
                        <th>{player.position}</th>
                    </tr>
                        )
                    )
                }
            </tbody>
        </table>

    </div>

    )
}

export default Player_table
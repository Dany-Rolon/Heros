import { useEffect, useState } from 'react';
import { Powerstats } from '../interfaces/heroInterface';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function useStats(){
    const myTeam = useSelector((state:RootState) => state.heros.myTeam);

    const [teamPowerstats, setTeamPowerstats] = useState<Powerstats>({} as Powerstats); 

    function getTeamStats(){
        let powerstats: Powerstats = {
            combat: 0, durability:0, intelligence:0, power:0, speed:0, strength:0
        }
        myTeam.forEach(item => {
            powerstats.combat += item.powerstats.combat;
            powerstats.durability += item.powerstats.durability;
            powerstats.intelligence += item.powerstats.intelligence;
            powerstats.power += item.powerstats.power;
            powerstats.speed += item.powerstats.speed;
            powerstats.strength += item.powerstats.strength;
        })

        return powerstats
    }
    
    function getAverage(powerstats: Powerstats){
        return (powerstats.combat + powerstats.durability + powerstats.intelligence + powerstats.power + powerstats.speed + powerstats.strength)/6
    }

    useEffect(() => {
        setTeamPowerstats(getTeamStats());
    }, [myTeam])

    return{
        teamPowerstats,
        getAverage
    } 

}

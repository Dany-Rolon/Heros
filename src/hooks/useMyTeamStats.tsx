import { useSelector } from 'react-redux';
import { Powerstats } from '../interfaces/heroInterface';
import { RootState } from '../redux/store';


export default function useMyTeamStats(){
    const myTeam = useSelector((state: RootState) => state.heros);
    const {hero1, hero2, hero3, villain1, villain2, villain3} = myTeam;

    function getTeamStats(team: Powerstats[]){
        let powerstats: Powerstats = {
            combat: 0, durability:0, intelligence:0, power:0, speed:0, strength:0
        }
        team.forEach(item => {
            powerstats.combat += item.combat;
            powerstats.durability += item.durability;
            powerstats.intelligence += item.intelligence;
            powerstats.power += item.power;
            powerstats.speed += item.speed;
            powerstats.strength += item.strength;
        })
        return powerstats
    }

    function getAverage(powerstats: Powerstats){
        return (powerstats.combat + powerstats.durability + powerstats.intelligence + powerstats.power + powerstats.speed + powerstats.strength)/6;
    }

    function getTeamAverage(){
        const arrayTeam = [hero1, hero2, hero3, villain1, villain1, villain3];
        const arrayTeamMembersPowerstats: Powerstats[] = [];
        let index = 1;
        arrayTeam.forEach(item => {
            if(item){
                ++index;
                arrayTeamMembersPowerstats.push(item.powerstats)
            }
        })
        return ((getAverage(getTeamStats(arrayTeamMembersPowerstats))/index).toFixed());
    }

    function printHeros(){
        console.log(myTeam);
    }

    return {
        hero1, hero2, hero3, villain1, villain2, villain3, getTeamAverage
    }
}
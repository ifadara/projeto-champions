import { PlayerModel } from "../models/player-model";
import { StatisticModel } from "../models/statistic-model";
import * as playerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";


export const getPlayerData = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;

    if(data){
        response = await httpResponse.ok(data);
    }
    else {
        response = await httpResponse.noContent();
    }
    
    return response;
}

export const getPlayerDataById = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);
    let response = null;

    if(data){
        response = await httpResponse.ok(data);
    }
    else {
        response = await httpResponse.notFound();
    }
    
    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;    

    if(Object.keys(player).length !== 0){
        await playerRepository.insertPlayer(player)
        response = httpResponse.created()
    }
    else {
        response = await httpResponse.badRequest();
    }

    return response;
}

export const deletePlayerService = async (id: number) => {
    let response = null;



    const isDeleted = await playerRepository.deleteOnePlayer(id);

    if(isDeleted){
        response = await httpResponse.ok({message: "deleted"});
    }
    else {
        response = await httpResponse.badRequest();
    }
    
    return response
}

export const updatePlayerService = async (id: number, statistics: StatisticModel) => {
    const data = await playerRepository.findAndModifyPlayer(id, statistics);

    let response = null;

    if(Object.keys(data).length !== 0){
        response = await httpResponse.ok(data);
    }
    else {
        response = httpResponse.badRequest();
    }

    return response;

}
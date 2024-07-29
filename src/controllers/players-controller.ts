import { Request, Response } from "express"
import * as service from "../services/players-service"
import * as HttpResponse from "../utils/http-helper";
import { StatisticModel } from "../models/statistic-model";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await service.getPlayerData();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.getPlayerDataById(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
export const postPlayer = async (req: Request, res: Response) => {
    const content = req.body;
    const httpResponse = await service.createPlayerService(content);

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
    else {
        const response = await HttpResponse.noContent();
        res.status(response.statusCode).json(response.body)
    }
    
}

export const deletePlayer = async ( req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body: StatisticModel = req.body;

    const httpResponse = await service.updatePlayerService(id, body);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

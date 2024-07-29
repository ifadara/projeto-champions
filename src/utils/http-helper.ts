import { HttpResponse } from "../models/http-response-model"

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "successfull"
        }
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: {
            message: "no results found"
        }
    }
}

export const notFound = async (): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: {
            message: "no results found"
        }
    }
}

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: {
            message: "Bad Request"
        }
    }
}
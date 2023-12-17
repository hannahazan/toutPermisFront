import {io}from 'socket.io-client'

export const socket = io.connect("https://toutpermisback-production.up.railway.app")
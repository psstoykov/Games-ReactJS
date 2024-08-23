import { userRouter } from '../api-service/user.js'

export default function configRoutes(app) {

    app.use(userRouter)
}


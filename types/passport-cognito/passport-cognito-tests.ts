/**
 * Created by Christophe Vidal <https://github.com/krizalys>
 */

import passport = require("passport");
import cognito = require("passport-cognito");

passport.use(
    new cognito.Strategy(
        {
            clientId: "clientId",
            region: "region",
            userPoolId: "userPoolId"
        },
        (
            accessToken: string,
            idToken: string,
            refreshToken: string,
            user: object,
            cb: (err: Error | null, user?: object | false) => void
        ) => {}
    )
);

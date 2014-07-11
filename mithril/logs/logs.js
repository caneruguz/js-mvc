/* Logs Module  */
// Using only Mithril


var logs = {};

// Assign model directly to loaded content
logs.List =  m.request({method: "GET", url: "../logs.json"});

// Model for individual logs
logs.singleLog = function(logType, logContent){
    this.logText = "";
    switch(logType){
        case "comment" :
            this.logText =  " commented ";
            break;
        case "wiki" :
            this.logText = " changed wiki to version ";
            break;
    }
    this.logUser = App.info().appUser;
    this.logUserID = App.info().appUserID;;
    this.logDate = new Date();
    this.logContent = logContent;
}

// Log actions, add log
logs.controller = function(){
    // This example is not using the m.prop getter and setter since direct javascript makes more sense for one time log writing.
    // Add log -- This gets fired in the controller when comment is being added. Will implement for wiki as well.
    this.add = function(logType) {
        if (logType) {
            logs.List.push(new logs.singleLog(logType));
        }
    }.bind(this);

}

// Knockout Version
//    var LogViewModel = function(){
//        var self = this;
//        /***** LOGS *******/
//        self.logData = ko.observableArray([]);
//        // Get Log json file.
//        $.getJSON("../logs.json", function(data) {
//            self.logData(data);
//            console.log("Log data", self.logData());
//        })
//        self.LogModel = function(logType, logContent){
//            var logText = "";
//            switch(logType){
//                case "comment" :
//                    logText =  " commented ";
//                    break;
//                case "wiki" :
//                    logText = " changed wiki to version ";
//                    break;
//            }
//
//            this.logUser = app.appInfo().appUser;
//            this.logUserID = app.appInfo().appUserID;
//            this.logText = logText;
//            this.logDate = new Date();
//            this.logContent = logContent;
//        }
//        return self;
//    };

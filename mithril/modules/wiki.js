
    var WikiViewModel = function(){
        var self = this;
        /***** WIKI *******/
            // Get Wiki json file.
        self.wikiData = ko.observable({});
//        $.getJSON("../wiki.json", function(data) {
//            self.wikiData(new self.WikiModel(data));
//            console.log("Wiki data", self.wikiData());
//        })
        self.WikiModel = function(data){
            this.title = ko.observable(data.title);
            this.content = ko.observable(data.content);
            this.version = ko.observable(data.version);
        }
        self.editMode = ko.observable(false);
            self.editToggle = function (){
            if(self.editMode()){
                self.editMode(false);
                var version = self.wikiData().version();
                self.wikiData().version(version+1);
                log.logData.push(new log.LogModel("wiki", self.wikiData().version()))
            } else {
                self.editMode(true);
            }

        }
    }


/**
* @author Adriano Galesso Alves
* @requires jQuery
* @namespace toArray
* Call examples:   
    //Set call with expiration
        - yourObject.toLocalStorage("setItem", { Key: "yourKey", ExpirationInMinutes: 60 });

    //Get call with key
        - $.fn.toLocalStorage("getItem", "yourKey");

    //Clear a key
        - $.fn.toLocalStorage("clear",  "yourKey");
*/

(function ($) {
    var methods = {
        setItem: function (options) {
            this.options = options;
            this.options.Timestamp = new Date();

            if (!this.options.ExpirationInMinutes) {
                this.options.ExpirationInMinutes = 30;
            }

            //Get today adding x minutes in time count (default x is 30 min)
            this.options.Timestamp.setMinutes((new Date().getMinutes()) + this.options.ExpirationInMinutes);

            //Convert to timestamp to ease the validation
            this.options.Timestamp = this.options.Timestamp.getTime();

            try {
                localStorage.setItem(this.options.Key, JSON.stringify(this));
            } catch (e) {
                //This can happen if the localstorage is somehow full for any broswer
                //If it happens we clear the localstorage
                localStorage.clear();
            }            
        },
        getItem: function (key) {
            var currentTimestamp = new Date().getTime();

            //Get the object from storage
            localStorageObject = JSON.parse(localStorage.getItem(key));

            //Validate if the object exists and if the timestamp is lass then x minutes
            if (localStorageObject && localStorageObject.options.Timestamp < currentTimestamp) {
                localStorageObject = null;
                $.fn.rkLocalStorage("clear", key);
            }

            if (localStorageObject) {
                return localStorageObject;
            }
			else {
				return null;
			}
        },
        clear: function (key) {
            localStorage.removeItem(key);

            this.Value = null;
        }
    };

    $.fn.toLocalStorage = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.toLocalStorage');
        }
    };
})(jQuery);
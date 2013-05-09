/**
 * jQuery Timer Plugin (jquery.timer.js)
 * @version 1.0.1
 * @author James Brooks <jbrooksuk@me.com>
 * @website http://james.brooks.so
 * @license MIT - http://jbrooksuk.mit-license.org
 */

(function($) {
	jQuery.timer = function(interval, callback, options) {
		// Create options for the default reset value
		var options = jQuery.extend({ reset: 500 }, options);
		var interval = interval || options.reset;

		if(!callback) { return false; }

		var Timer = function(interval, callback, disabled) {
			// Only used by internal code to call the callback
			this.internalCallback = function() { callback(self); };

			// Clears any timers
			this.stop = function() { clearInterval(self.id); };
			// Resets timers to a new time
			this.reset = function(time) {
				if(self.id) { clearInterval(self.id); }
				var time = time || options.reset;

				this.id = setInterval(this.internalCallback, time);
			};

			// Set the interval time again
			this.interval = interval;
			
			// Set the timer, if enabled
			if (!disabled) {
				this.id = setInterval(this.internalCallback, this.interval);
			}

			var self = this;
		};

		// Create a new timer object
		return new Timer(interval, callback, options.disabled);
	};
})(jQuery);

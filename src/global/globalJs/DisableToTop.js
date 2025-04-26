export function disableScroll(target, direction) {
    // Get the current page scroll position
    if (direction === 'down' || direction === 'bottom') {
        target.onscroll = () => {
            target.scrollIntoView({behavior: "smooth", block: "end"});
          };
    }else{
        target.onscroll = () => {
            target.scrollIntoView({behavior: "smooth", block: "start"});
          };
    }
    
  }
    
export function enableScroll(target) {
    target.onscroll = function() {};
  }

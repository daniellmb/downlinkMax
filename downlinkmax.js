/**
 * @file downlinkMax is 0.26KB Network Information API downlinkMax polyfill micro-library.
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */

function downlinkmax() {
  var limitless = Infinity,
      nav = navigator,
      speed,

      // deal with vendor prefixing and fallback if not supported
      connection = nav.connection || nav.mozConnection || nav.webkitConnection || {
        // API not supported
        downlinkMax: limitless
      };

  // check that the API doesn't already support downlinkMax
  if (!('downlinkMax' in connection)) {

    // assume NOT W3C Editor's Draft 09 October 2014
    // check if API supports bandwidth
    if ('bandwidth' in connection) {

      // assume W3C Working Draft 29 November 2012
      // standardize connection.bandwidth value by converting megabytes per second (MB/s) to megabits per second (Mbit/s)
      connection.downlinkMax = connection.bandwidth * 8;
    } else {

      // assume W3C Working Draft 07 June 2011
      // convert connection.type value to approximate downlink values
      // speed estimate is based on the median downlink value for common devices in megabits per second (Mbit/s)
      switch (connection.type) {
        case 'none': speed = 0; break;
        case '2g': speed = 0.134; break;
        case 'bluetooth':
        case 'cellular': speed = 2; break;
        case '3g': speed = 8.95; break;
        case '4g': speed = 100; break;
        case 'ethernet': speed = 550; break;
        case 'wifi': speed = 600; break;
        // other, unknown etc.
        default: speed = limitless; break;
      }
      connection.downlinkMax = speed;
    }
  }

  // return the maximum downlink speed
  return connection.downlinkMax;
}
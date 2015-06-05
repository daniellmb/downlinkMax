###*
  @file downlinkMax is 0.26KB Network Information API downlinkMax polyfill micro-library.
  @author Daniel Lamb <dlamb.open.source@gmail.com>
###
downlinkmax = ->
  limitless = Infinity
  nav = navigator

  # deal with vendor prefixing and fallback if not supported
  connection = nav.connection or nav.mozConnection or nav.webkitConnection or downlinkMax: limitless

  # check that the API doesn't already support downlinkMax
  # some android's downlinkMax is null
  unless 'downlinkMax' of connection or not connection.downlinkMax?

    # assume NOT W3C Editor's Draft 09 October 2014
    # check if API supports bandwidth
    # some android's bandwidth is Infinity
    if 'bandwidth' of connection and connection.bandwidth != limitless

      # assume W3C Working Draft 29 November 2012
      # standardize connection.bandwidth value by converting megabytes per second (MB/s) to megabits per second (Mbit/s)
      connection.downlinkMax = connection.bandwidth * 8
      
      # Some wrong number (negative?) or type
      if not isNaN(connection.downlinkMax) or connection.downlinkMax == 0
        speed = limitless
    else

      # assume W3C Working Draft 07 June 2011
      # convert connection.type value to approximate downlink values
      # speed estimate is based on the median downlink value for common devices in megabits per second (Mbit/s)
      switch connection.type
        when 'none'
          speed = 0
        when '2g'
          speed = 0.134
        when 'bluetooth', 'cellular'
          speed = 2
        when '3g'
          speed = 8.95
        when '4g'
          speed = 100
        when 'ethernet'
          speed = 550
        # android browser stock implements wrong type 2
        # @todo need test another type connection 
        # in android stock browser
        when 2
        when 'wifi'
          speed = 600
        # other, unknown etc.
        else
          speed = limitless

  # return the maximum downlink speed
  speed

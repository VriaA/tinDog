/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html", "./dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "'Poppins', sans-serif",
        "quicksand": "'Quicksand', sans-serif"
      },
      dropShadow: {
        "dogText": "1px 1px 0 #000000"
      },
      boxShadow: {
        "heartShadow": "5px 5px 0px #f43f5e",
        "startBtn": "2px 4px 0px #633666",
        "startBtnActive": "1px 2px 0px #633666"
      },
      backgroundImage: {
        'body-pattern': "url('/../images/patternpad.svg')",
      },
      gridTemplateColumns: {
        'home-pictures': 'repreat(10, 200px)'
      },
      keyframes: {
        scroll: {
          '0%': {transform:'translateX(2%)'},
          '100%': {transform: 'translateX(-87%)'}
        },
        welcomePing: {
          '0%': {transform: 'scale(1.5)', opacity: '.5'},
          '100%': {transform: 'scale(1)', opacity: '1'}
        },
        left: {
          '0%': {transform: 'translateX(0px)'},
          '100%': {transform: 'translateX(-10px)'}
        },
        right: {
          '0%': {transform: 'translateX(0px)'},
          '100%': {transform: 'translateX(10px)'}
        },
        hide: {
          '0%': {opacity: '1'},
          '10%': {opacity: '1'},
          '20%': {opacity: '1'},
          '30%': {opacity: '1'},
          '39%': {opacity: '1'},
          '40%': {opacity: '0'},
          '50%': {opacity: '0'},
          '60%': {opacity: '0'},
          '70%': {opacity: '0'},
          '80%': {opacity: '0'},
          '90%': {opacity: '0'},
          '100%':{opacity: '0'}
        },
        show: {
          '0%': {opacity: '0'},
          '10%': {opacity: '0'},
          '20%': {opacity: '0'},
          '30%': {opacity: '0'},
          '39%': {opacity: '0'},
          '40%': {opacity: '1'},
          '50%': {opacity: '1'},
          '60%': {opacity: '1'},
          '70%': {opacity: '1'},
          '80%': {opacity: '1'},
          '90%': {opacity: '1'},
          '100%':{opacity: '1'},
        },
        instructionCursor: {
          '0%': {left: '0%', opacity: '0'},
          '10%': {left: '20%', opacity: '1'},
          '20%': {left: '20%'},
          '30%': {left: '20%'},
          '40%': {left: '20%'},
          '50%': {left: '20%'},
          '60%': {left: '70%'},
          '70%': {left: '70%'},
          '80%': {left: '70%'},
          '90%': {left: '70%'},
          '100%':{left: '70%'}
        }, 
        declineText: {
          '0%': {color: 'black'},
          '10%': {color: '#ff0000'},
          '20%': {color: '#ff0000'},
          '30%': {color: '#ff0000'},
          '40%': {color: '#ff0000'},
          '50%': {color: '#ff0000'},
          '60%': {color: 'black'},
          '70%': {color: 'black'},
          '80%': {color: 'black'},
          '90%': {color: 'black'},
          '100%':{color: 'black'}
        },
        acceptText: {
          '0%': {color: 'black'},
          '20%': {color: 'black'},
          '30%': {color: 'black'},
          '40%': {color: 'black'},
          '50%': {color: 'black'},
          '60%': {color: '#008000'},
          '70%': {color: '#008000'},
          '80%': {color: '#008000'},
          '90%': {color: '#008000'},
          '100%':{color: '#008000'}
        },
        declineIcon: {
          '0%': {background: '#ffffff'},
          '10%': {background: '#fecdd3'},
          '20%': {background: '#fecdd3'},
          '30%': {background: '#fecdd3'},
          '40%': {background: '#fecdd3'},
          '50%': {background: '#fecdd3'},
          '60%': {background: '#ffffff'},
          '70%': {background: '#ffffff'},
          '80%': {background: '#ffffff'},
          '90%': {background: '#ffffff'},
          '100%':{background: '#ffffff'}
        },
        acceptIcon: {
          '0%': {background: '#ffffff'},
          '20%': {background: '#ffffff'},
          '30%': {background: '#ffffff'},
          '40%': {background: '#ffffff'},
          '50%': {background: '#ffffff'},
          '60%': {background: '#a7f3d0'},
          '70%': {background: '#a7f3d0'},
          '80%': {background: '#a7f3d0'},
          '90%': {background: '#a7f3d0'},
          '100%':{background: '#a7f3d0'}
        },
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'welcomePing': 'welcomePing .5s ease-in-out .5s 1',
        'arrowLeft': 'left 1.2s linear infinite',
        'arrowRight': 'right 1.2s linear infinite',
        'hideInstruction': 'hide 10s linear 0s infinite',
        'showInstruction': 'show 10s linear 0s infinite',
        'instructionCursor': 'instructionCursor 3s linear infinite alternate',
        'declineText': 'declineText 3s linear infinite alternate',
        'acceptText': 'acceptText 3s linear infinite alternate',
        'declineIcon': 'declineIcon 3s linear infinite alternate',
        'acceptIcon': 'acceptIcon 3s linear infinite alternate',
      }

    },
  },
  plugins: [],
}
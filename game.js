const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
 
let state = {}
 
function startGame() {
  state = {}
  showTextNode(1)
}
 
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
 
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}
 
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
 
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}
 
const textNodes = [
  {
    id: 1,
    text: 'Mario is walking around the forest filled with plastic litter. Then Hoot lands on Mario’s head, poops, then flies away. What should Mario do?',
    options: [
      {
        text: 'Say “Mamma Mia!” and chase after the owl',
        nextText: 2
      },
      {
        text: 'Given surroundings, smash Hoot’s poop for any plastic remnants',
        nextText: 3
      },
      {
        text: 'Find Hoot and cook him for dinner as revenge',
        nextText: 4
      },  
 
    ]
  },
  {
    id: 2,
    text: 'Close enough. Yes, it is understandable that you’re mad over some measly owl pooping on your head, but is chasing Hoot over your anger helping the environment in any way?',
    options: [
      {
        text: 'Retry',
        nextText: 1
      }
    ]
  },
  {
    id: 3,
    text: ' Yes, that is what you should do! Bird species die of starvation quickly after plastic consumption.',
    options: [
      {
        text: 'Continue',
        nextText: 5
      }
    ]
  },
  {
    id: 4,
    text: 'Okay, you’re mad at Hoot and want to get back at him for pooping on you by having him for dinner. Listen, all that is understandable but is that helping the environment in any way? Exactly, no. Plus you may have ruined the food chain too, uh-oh :(',
    options: [
      {
        text: 'Retry',
        nextText: 1
      }
    ]
  },
  {
    id: 5,
    text: 'Mario is eating ice cream and spills it on the ground, then walks away. What do you do? ',
    options: [
      {
        text: 'Take control of the ice cream truck and crash into Mario',
        nextText: 6
      },
      {
        text: 'Tell Mario: “This is why you can’t have nice things”',
        nextText: 7
      },
      {
        text: 'Actually be nice for once and clean up after Mario’s mess',
        nextText: 8
      },  
 
    ]
  },
  {
    id: 6,
    text: 'Haha, while that’s tempting, it’s best to not risk getting arrest for assault by the Lakitu police.',
    options: [
      {
        text: 'Retry',
        nextText: 5
      }
    ]
  },
  {
    id: 7,
    text: 'While that’s tempting, this issue might be best resolved by actually being nice to Mario.',
    options: [
      {
        text: 'Retry',
        nextText: 5
      }
    ]
  },
  {
    id: 8,
    text: 'Yes, that’s it. A bit of kindness goes a long way, as hard as it may be sometimes! Although, encourage him to clean up after himself next time.',
    options: [
      {
        text: 'Continue',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'You’re a cop in NYC. You see that Bowser and his friends are driving at 85 mph, which so not the normal speed limit. What will you do?',
    options: [
      {
        text: 'Stop them and tell them to take their cool kid wannabe vibes to the subway instead',
        nextText: 10
      },
      {
        text: 'Hop in your patrol car and jump over Bowser and his friends"’ cars',
        nextText: 11
      },
      {
        text: 'Fit Bowser and all of his friends into your patrol car and make sure they fit',
        nextText: 12
      },
 
    ]
  },
  {
    id: 10,
    text: 'Yes, encourage them to carpool! You can save lots of emissions by using the train as opposed to using a car.',
    options: [
      {
        text: 'Continue',
        nextText: 13
      }
    ]
  },
  {
    id: 11,
    text: 'While that sounds cool and something out of a Fast and Furious movie, we do not recommend you do this. We are not responsible for death or injury that may have been caused by this game…',
    options: [
      {
        text: 'Retry',
        nextText: 9
      }
    ]
  },
  {
    id: 12,
    text: 'Um, Bowser alone is huge and weighs 2 tons. You won’t get them to fit, let alone be able to move when you step on the gas. And stepping on the gas means more emissions, which isn’t great for the environment.',
    options: [
      {
        text: 'Retry',
        nextText: 9
      }
    ]
  },
  {
    id: 13,
    text: 'Congratulations, you win.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },      
]
 
startGame()

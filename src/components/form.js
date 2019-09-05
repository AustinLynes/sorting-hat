import React from 'react';

//#region  DATA
const questions =
    [
        //#region  1
        {
            id: 0,
            question: 'what is the core material for your wand?',

        },
        //#endregion

        //#region 2
        {
            id: 1,
            question: 'you see a classmate using an enchated quill, you may be the top student in class but they are seccond to you, what do you do?',

        },
        //#endregion

        //#region 3
        {
            id: 2,
            question: 'You would be most Hurt by some one calling you ..?',

        },
        //#endregion

        //#region 4
        {
            id: 3,
            question: 'You are battling another classmate and they fire an unknown spell, you shout ..?',

        },
        //#endregion

        //#region 5
        {
            id: 4,
            question: 'its your final year of hogwarts and you just recieved a howler from you parents, what for?',

        },
        //#endregion

        //#region 6
        {
            id: 5,
            question: 'What skill are you most proud of?',

        }
        //#endregion
    ]

const answers =
    [
        //#region  Question 1 answers
        {
            id: 0,
            key: 0,
            answer: 'Pheonix Feather',
            for: 'griffendor',
            selected: false
        },
        {
            id: 1,
            key: 0,
            answer: 'Unicorn Hair',
            for: 'hufflepuff',
            selected: false
        },
        {
            id: 2,
            key: 0,
            answer: 'Dragon Heartstring',
            for: 'ravenclaw',
            selected: false
        },
        {
            id: 3,
            key: 0,
            answer: 'Serpents Skin',
            for: 'slytherin',
            selected: false
        },
        //#endregion

        //#region Question 2 answers
        {
            id: 4,
            key: 1,
            answer: 'shout out to everyone that he/she is cheating',
            for: 'griffendor',
            selected: false
        },
        {
            id: 5,
            key: 1,
            answer: 'do nothing for it doesnt concern my well being',
            for: 'hufflepuff',
            selected: false
        },
        {
            id: 6,
            key: 1,
            answer: 'let him/her know that they are breaking the rules and tell the professor',
            for: 'ravenclaw',
            selected: false
        },
        {
            id: 7,
            key: 1,
            answer: 'ask them to give you one',
            for: 'slytherin',
            selected: false
        },
        //#endregion

        //#region  Question 3 answers
        {
            id: 8,
            key: 2,
            answer: 'Boring',
            for: 'griffendor',
            selected: false
        },
        {
            id: 9,
            key: 2,
            answer: 'Unkind',
            for: 'hufflepuff',
            selected: false
        },
        {
            id: 10,
            key: 2,
            answer: 'Ignorant',
            for: 'ravenclaw',
            selected: false
        },
        {
            id: 11,
            key: 2,
            answer: 'Weak',
            for: 'slytherin',
            selected: false
        },
        //#endregion

        //#region Question 4 answers
        {
            id: 12,
            key: 3,
            answer: 'Expelliarmus!',
            for: 'griffendor',
            selected: false
        },
        {
            id: 13,
            key: 3,
            answer: 'Protego!',
            for: 'hufflepuff',
            selected: false
        },
        {
            id: 14,
            key: 3,
            answer: 'Stupefy!',
            for: 'ravenclaw',
            selected: false
        },
        {
            id: 15,
            key: 3,
            answer: 'Crucio!',
            for: 'slytherin',
            selected: false
        },
        //#endregion

        //#region  Question 5 answers
        {
            id: 16,
            key: 4,
            answer: 'Sneaking into the Forbidden Forest at night on a dare',
            for: 'griffendor',
            selected: false
        },
        {
            id: 17,
            key: 4,
            answer: 'Nothing! Id never do anything to warrant a Howler.',
            for: 'hufflepuff',
            selected: false
        },
        {
            id: 18,
            key: 4,
            answer: 'being put in detention after i was caught in the library after hours',
            for: 'ravenclaw',
            selected: false
        },
        {
            id: 19,
            key: 4,
            answer: 'Getting caught cheating in my Divination O.W.L.',
            for: 'slytherin',
            selected: false
        },
        //#endregion

        //#region Question 6 answers
        {
            id: 20,
            key: 5,
            answer: 'My ability to make new friends.',
            for: 'griffendor',
            selected: false
        },
        {
            id: 21,
            key: 5,
            answer: 'My ability to keep secrets.',
            for: 'hufflepuff',
            selected: false
        },
        {
            id: 22,
            key: 5,
            answer: 'My ability to absorb new information.',
            for: 'ravenclaw',
            selected: false
        },
        {
            id: 23,
            key: 5,
            answer: 'My ability to get what I want.',
            for: 'slytherin',
            selected: false
        }
        //#endregion

    ]

//#endregion

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions,
            answers,
            counter: 0
        }           
        this.state.answers.map(answer => {
        })
        
    }
    setHouse = () => {
        this.props.setHouse();
        const house = window.localStorage.getItem('name');
        window.location.href=(`/find-my-class/${house}`)
    }
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    createQuestion = (question) => {
        return (
            <form className='answer-area' key={Math.random(200)}>
                 {/* {this.shuffle(questions)} */}
            { this.shuffle(answers) }
                <h2>{question.question}</h2>
                {
                    <div className='inner'>
                        {
                            this.state.answers.map(answer => {
                                if (answer.key === question.id)
                                    return <p key={answer.id} onClick={() => this.toggleItem(answer.id)} key={Math.random(200)} className={`answer${answer.selected === true ? ' selected' : ''}`}>{answer.answer}</p>
                            })
                        }
                    </div>
                }
            </form>
        )
    }
    toggleItem = (itemID) => {
        this.setState({
            answers:
                this.state.answers.map(answer => {
                    if (answer.id === itemID) {
                        this.props.togglePoint(answer.for, answer.selected)
                        return { ...answer, selected: !answer.selected }
                    }
                    return answer;
                })
        })

    }
    handleCounter = (dir) => {
        console.log(this.state.questions.length)
        console.log(this.state.counter)
        if (dir === 'up') {
            this.state.answers.map(answer => {

            })
            this.setState({ counter: this.state.counter += 1 })
        }
        if (dir === 'down') {
            this.setState({ counter: this.state.counter -= 1 })
        }

    }
    render() {
        return (
            <div className='form'>

                {
                    this.state.questions.map(question => {
                        if (question.id === this.state.counter) {
                            return this.createQuestion(question);
                        }
                    })
                }
                <div className='btn-container'>
                    <button className='btn' type='button' onClick={() =>
                        this.state.counter === 0 ? window.location.href = ('/') : this.handleCounter('down')}>
                        {`${this.state.counter === 0 ? 'Exit to Dashboard' : 'Previous Question'}`}
                    </button>
                    <button className='btn' type='button' onClick={() =>
                        this.state.counter === this.state.questions.length - 1 ? this.setHouse() : this.handleCounter('up')}>
                        {`${this.state.counter === this.state.questions.length - 1 ? 'Find my Class' : 'Next Question'}`}</button>
                </div>
            </div>
        )
    }
}

export default Form;
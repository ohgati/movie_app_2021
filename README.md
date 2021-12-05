# 오승엽 201840217

# 12월 5일 학습내용
## Components와 Props

 - 이 함수는 데이터를 가진 하나의 속성을 나타내는 데이터이고 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 컴포넌트입니다.

- 컴포넌트 추출 : 재사용 가능한 컴포넌트를 만들어 놓는 것은 더 큰 앱에서 작업할 때 두각을 나타냅니다. UI 일부가 여러 번 사용되거나 UI 일부가 자체적으로 복잡한 경우에는 별도의 컴포넌트로 만드는 게 좋습니다.

- props는 읽기 전용입니다 : 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다

## State and Lifecycle

- 이 컴포넌트는 스스로 타이머를 설정할 것이고 매초 스스로 업데이트할 것입니다.
```jsx
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

```
- ### 함수 클래스로 변환하기 

1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성합니다.

2. render()라고 불리는 빈 메서드를 추가합니다.

3. 함수의 내용을 render() 메서드 안으로 옮깁니다.

4. render() 내용 안에 있는 props를 this.props로 변경합니다.

5. 남아있는 빈 함수 선언을 삭제합니다.

```jsx
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

```

- ### 생명주기 메서드를 클래스에 추가하기

    - Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정하려고 합니다. 이것은 React에서 “마운팅”이라고 합니다.
    
    ```jsx
    class Clock extends React.Component {
        constructor(props) {
        super(props);
        this.state = {date: new Date()};
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }

        render() {
        return (
             <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
        }
        }
    ```
- ### State를 올바르게 사용하기

    - setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합합니다.
  ```jsx
    componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
    ```

- ### 데이터는 아래로 흐릅니다

    - State는 종종 로컬 또는 캡슐화라고 불립니다. state가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 접근할 수 없습니다.
    ```jsx
    class Clock extends React.Component {
        constructor(props) {
        super(props);
        this.state = {date: new Date()};
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }

        render() {
        return (
             <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
        }
        }
    ```
## 이벤트 처리하기 

 - React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용합니다.
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달합니다.

# 11월 24일 학습내용
## creat-react-app으로, Remarkable 사용하기

  - creat-react-app으로 markdown-editor 프로젝트를 생성한다.
  - 정상 동작을 확인하다.
  - App.js에 있는 필요없는 코드를 삭제한다.
  - App.js에 문서의 코드를 복사해 넣는다.
  - component의 이름을 App으로 수정한다.
  - rendering은 index.js에 위임한다.
  - Remarkable을 설치한다.
  - React와 Remarkable을 import한다.
  - 동작이 되는지 확인한다.

## code review
  
  - 외부 컴포넌트를 사용하기 위해 생성자 내에 객체를 생성한다.
  - state를 이용하여 Remarkable에 변환할 마크다운 문장을 제출한다.
  - 글이 입력되면 handleChange 이벤트를 사용하여 state의 value를 갱신한다.
  - getRawMarkup() 메소드를 통해 html을 반환 받는다.

## react 배우기

    다른 낯선 기술과 마찬가지로 React는 러닝 커브(learning curve)가 있습니다. 약간의 인내심을 가지고 연습하면, React에 대한 요령을 익힐 수 있습니다.

## react 주요개념
 1. Hello World
- React 주요 개념에 대한 단계별 안내서의 첫 번째 장입니다
 2. JSX
 - JSX라 하며 JavaScript를 확장한 문법입니다. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것
 - React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)과 연결된다
 3. 엘리먼트 렌더링
 - 브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다. 
 - React 엘리먼트는 불변객체입니다. 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없습니다. 엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여줍니다
 4. Components와 Props 
 - 이 함수는 데이터를 가진 하나의 “props” (props는 속성을 나타내는 데이터입니다) 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트입니다. 

# [11월 17일 학습내용]
## 상태를 가지는 컴포넌트

● this.props를 이용해 접근하고 컴포넌트의 상태 데이터가 바뀌면 render()가 다시 호출되어 마크업이 갱신됩니다.
    
    
    class Timer extends React.Component {
    constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    }

     tick() {
     this.setState(state => ({
      seconds: state.seconds + 1
     }));
     }

    componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
    clearInterval(this.interval);
     }

    render() {
        return (
      <div>
        Seconds: {this.state.seconds}
      </div>
     );
     }
    }
    
## 애플리케이션
    
● props와 state를 사용해서 간단한 Todo 애플리케이션을 만들 수 있고 이벤트 핸들러들이 인라인으로 각각 존재
    
     class TodoApp extends React.Component {
     constructor(props) {
     super(props);
     this.state = { items: [], text: '' };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     }

     render() {
     return (
         <div>
         <h3>TODO</h3>
         <TodoList items={this.state.items} />
         <form onSubmit={this.handleSubmit}>
             <label htmlFor="new-todo">
               What needs to be done?
             </label>
             <input
              id="new-todo"
             onChange={this.handleChange}
              value={this.state.text}
            />
              <button>
                Add #{this.state.items.length + 1}
           </button>
         </form>
         </div>
      );
     }
    
      handleChange(e) {
     this.setState({ text: e.target.value });
     }

     handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
         text: this.state.text,
          id: Date.now()
     };
     this.setState(state => ({
         items: state.items.concat(newItem),
         text: ''
     }));
     }
    }

    class TodoList extends React.Component {
     render() {
        return (
        <ul>
         {this.props.items.map(item => (
             <li key={item.id}>{item.text}</li>
         ))}
        </ul>
        );
     }
    }

   ReactDOM.render(
   <TodoApp />,
    document.getElementById('todos-example')
   );
    
   ReactDOM.render(
   <Timer />,
   document.getElementById('timer-example')
   );

# [11월 10일 학습내용]

## 리다이렉트 기능 만들어 보기

    1. localhost:3000을 입력해서 이동한 다음 console 탭에서 history에 출력된 값을 확인해본다, pidMount() 생명주기 함수를 사용해 Detail 컴포넌트가 마운트될 때 push() 함수를 실행한다
    2. Detail 컴포넌트를 함수형에서 클래스형 컴포넌트로 변경한 다음 location.history키를 구조 분해할당한다
    3. location.state가 undeerfined인 경우 history.push("/")를 실행하도록 책의 내용처럼 코드를 작성한다
    4. 영화 앱을 실행한 /movie-detail으로 이동하면 다시 Home으로 돌아오게 되는데 아직 영화 상세페이지롤 이동하면 hello만 출력된다
    5. Movie 컴포넌트로부터 전달받은 영화 데이터는 영화데이터는 location.state에 들어있으므로 hello를 지우고 location.state.title을 출력한다
    6. /movie-detail로 이동하면 오류가 발생하는데 이유는 Detail 컴포넌트가 render() -> componentDidMount() 순서로 함수를 실행했기 때문이다
    그러므로 render() 함수에도 componentDidMount() 생명주기 함수에 작성한 리다이렉트 코드를 추가해준다
    7. location.state가 없으면 render 함수가 null을 반환하도록 수정한다
    
## 영화앱 깃허브에 배포하기

    1. package.json 파일을 열어 homepage, browerslist 키 아래에 추가한다
    2. package.json 파일을 열어 scripts 키값으로 명령어를 추가한다
    3. git add -> git commit -m "최종 완성 코드" -> git push origin master로 차례대로 명령어를 입력한다
    4. npm install gh-page를 입력하여 gh-page를 설치해준다
    5. git remoye -v를 입력해준다
    6. npm run deploy를 입력하여 영화앱을 배포한다
    7. http://[깃허브 계정].github.io/[저장소 이름]를 입력하여 만들어진 영화앱을 확인해본다
    
## React의 특징

    1. 캡슐화된 컴포넌트로 개발되어 재사용이 용이하다.
    2. 상호작용이 많은 UI개발에 적합하다.
    3. DOM과는 별개로 상태를 관리할 수 있다.
    4. 기존 코드와 별개로 개발이 가능하다.

## state가 포함된 component

    1. 동적인 데이터는 this.state로 접근할 수 있다.
    2. state가 변하면 render()메서도가 다시 호출되어 화면이 갱신된다
    3. 예제는 화면이 켜져있는 동안 초를 카운트하는 timer앱이다
    4. 초기화 state를 0으로 출력한다.
    5. 이후 componentDidMount()메소드로 1초에 한번씩 tick()메소드를 호출한다.
    6. 호출된 tick()메소드는 setState()를 통해 state를 1씩 증가시킨다

# [11월 3일 학습내용]

## 네비게이션 만들어보기

    1. Navigation.js파일 만들고 2개의 a 엘리먼트를 반환하도록 아래처럼 코드를 작성한다
    2. Navigation.js를 임포트하고 <HashRouter></HashRouter> 사이에 포함시킨다
    3. Home 링크를 눌러서 잘 작동하는지 확인한다.
    4. Navigation 컴포넌트에 link 컴포넌트를 임포트한 다음 a엘리먼트를 link 컴포넌트로 바꾸고 href 속성은 to로 바꾸고 Home과 About 링크를 눌러본다
    5. Navigation 컴포넌트의 위치를 확인해본다
    6. components 폴더에 Navigation.css 파일을 만들고 책에 있는 내용처럼 작성하고 임포트한다

## 영화 상세 정보 기능 만들어 보기

    1. Console탭을 확인해보면 오류가 뜨는데 해결하기 위해서는 route props에 데이터를 담아준다.
    2. route props에 데이터를 담아 보내려면 Navigation 컴포넌트를 교제의 내용처럼 수정한다.
    3. /about으로 이동하고 console탭을 state 데이터를 확인한다.
    4. Navigation 컴포넌트를 원래대로 되돌려놓고 Movie 컴포넌트에 link 컴포넌트를 추가한다.
    5. Movie 컴포넌트에 link 컴포넌트 임포트하고 link 컴포넌트 안에 to props를 작성한다.
    6. Detail 컴포넌트를 route 폴더에 추가하고 영화 데이터를 확인하기 위해 console.log()도 작성하다
    7, App.js를 연다음 Detail 컴포넌트를 임포트하고 Route 컴포넌트에서 Detail 컴포넌트를 그려주도록 코드를 작성한다
    8. /movie-detail로 이동하고 Console 탭에서 Movie 컴포넌트에서 link 컴포넌트를 통해 보낸 데이터를 확인한다
    9. /movie-detail로 이동하고 Console 탭에서 영화 데이터 유무 확인하고 오류가 발생하는데 Detail 컴포넌트에 리다이렉트 기능을 추가하도록 수정한다

# [10월 27일 학습내용]

## 영화 앱 전체 모습 수정하기(2)

    1. map() 함수를 <li key{index} className="genres__genre">{genre}<li>와 같이 코드를 수정한다

## 영화 앱 멋지게 스타일링하기

    1. App.css 파일을 책에 있는 내용처럼 수정한다
    2. Movie.css 파일을 책에 있는 내용처럼 수정하면 영화 정보가 카드 모양으로 출력된다
    3. {summary}를 {summary.slice(0, 180)}...}로 수정하면 시놉시스가 180자로ㅓ 제한되고 생략표시로 ...로 표시된다.
    4. create-react-appp에서 지정한 기본값인 React App이라고 되어있다
    5. public 폴더의 index.html 파일을 열어 title 엘리먼트 사이에 넣어준다.

## react-router-dom 설치하고 프로젝트 폴더 정리하기

    1. npm install react-router-dom를 입력하여 설치한다.
    2. 컴포넌트를 역할에 맞게 분리해서 폴더에 담아 관리하기 위해 알맞게 폴더를 만들어서 분류해준다.
    3. src 폴더 안에 routes 폴더를 만들어 Home.js, About.js 파일을 만들다.
    4. App.js의 코드를 Home.js로 복사하고 class Home, export default Home로 모두 바꾼다.
    5. routes 폴더에 Home.css를 만들어 책에 있는 내용처럼 입력해준다.
    6. App.js도 책에 있는 내용처럼 입력해준다.

## 라우터 만들어보기

    1. HashRouter와 Route 컴포넌트를 임포트한 다음, HashRouter 컴포넌트가 Route 컴포넌트를 감싸 반환하다
    2. About 컴포넌트를 임포트하고 path, component props에 URL과 About 컴포넌트를 전달하다
    3. About.js에 책에 있는 내용처럼 입력해준다.
    4. loaclhost:3000/#/about로 접속하여 컴포넌트에 작성했던 내용들을 확인해준다
    5. App 컴포넌트에 Home 컴포넌트를 임포트하고 또 다른 Route 컴포넌트를 추가한다.
    6. loaclhost:3000/#/about로 접속하면 About 컴포넌트와 Movie 컴포넌트가 함꼐 출력된다.
    7. Router를 책에 있는 내용처럼 작성해준다.
    8. loaclhost:3000/#/home에 접속하고 loaclhost:3000/#/home/introduction로 접속해보면 Home과 introduction이 함께 출력된다
    9. Home, About 컴포넌트를 그려주었던 상태로 코드를 돌려놓고 loaclhost:3000/#/about로 접속한다
    10. path props가 "/"dls Route 컴포넌트에 exact={true}를 추가하고 loaclhost:3000/#/aboutfh 접속하면 About 컴포넌트만 출력된다
    11. routes 폴더에 About.css 파일을 생성한 다음 아래와 같이 입력하고 저장한 다음 About.js에 About.css를 임포트하고 적용한다


# [10월 13일 학습내용]

## Movie 컴포넌트 만들기 (2)

    1. Movie 컴포넌트에서 id,title,year,summary,poseter props를 받아 출력하도록 수정한다
    2. this.state에 있는 novies를 얻은 다음 App 컴포넌트에서 We are ready를 출력하고 있는 자리에 Movies.app 사용한다
    3. 우선 Console 탭에 영화 데이터를 출력한 다음, 아무것도 반환하지 않은 함수를 전달한다
    4. Movie 컴포넌트를 임포트한 다음에 movies.map()에 전달한 함수가 <Movie/>를
    반환하도록 만들면 된다
    5. Moive 컴포넌트에 props를 전달, id,year,title,summary,poster를 isRequired로 설정하고 설정한 props를 모두 전달해야 한다
    ※ poster props의 경우 키 이름이 medium_cover_image이므로 movie.poster가 아니라 movie.medium_cover_image라고 작성해야 한다
    6. Console탭을 보면 console.log()가 출력해주는 내용을 확인해보면 Key props 경고 메시지가 나오고 있다
    7. key props는 유일해야 하므로 key={moive.id} 를 추가하고 console.log(movie) 를 지운다

## 영화앱 스타일링하기

    1. App 컴포넌트가 JSX의 바깥쪽을 section class="container"로 Loding...을 <div class="loder"><span class="loader"__text></span>으로,movie.map()는
    <duv class="movies"></div>로 감싼다.
    2. Movie 컴포넌트가 반환할 JSX를 <duv class="movies"></div>로 감싸고 그 안에 title, year, sumarry를 목적에 맞는 엘리먼트로 감싸자
    3. 전체 엘리먼트를 감싸는 엘리먼트를 추가하고 img 엘리먼트를 <div class="movie__data"> 위에 추가해 img 엘리먼트의 src 속성에는 poster props를 alt, title 속성에는 title props를 전달한다
    4. movie 컴포넌트에는 id props가 필요하지 않으니 제거한다
    5. title props를 포함하고 있느 h3 엘리먼트에 style 속성을 추가하고 backgroundColor:"red"와 같이 속성값을 입력한다
    6. src파일에 Movie.css와 App.css파일을 만들다
    7. App,Moive 컴포넌트에 App.css와 Movies.css를 각각 임포트 적한다
    ※ Movie 컴포넌트에 적요완 style 속성은 사용하지 않으니까 지운다
    8. App.css 파일을 수정, 배경색을 어둡게 바꾼다

## 영화 앱 전체 모습 수정하기

    1. App.css 내용을 모두 지운다
    2. runtime 키 아래에 genres키를 추가해 준다
    3. Movie 컴포넌트 인자에 genres를 추가하고 Movie.propType에는 genresprops가 문자열 배열이며 반드신 필요함을 추가한다
    그 다음에 console탭을 열면 경고 메시지 2개가 보인다
    - Invalid DOM property 'class'. Did you mean 'className'?
    - Failed prop type: The prop 'genres' is marked as required in 'Movie', but its value is 'undefined'.
    첫번쨰 경고문 메시지는 JSX에 사용한 속성 중 class 속성이 class name으로 사용되어야 한다는 뜻이고 두번쨰는 genres props가 필수인데 Movie 컴포넌트에
    underfined로 넘어왔다는 뜻이다
    4. genres가 underfined인 상태를 고치기 위해서 App movie 컴포넌트로 genres props를 전달한다
    5. 작성한 모든코드에 있는 JSX의 class속성이름 classname으로 바꿔준다
    6. genres props가 배열이므로 map() 함수를 사용하므로 genres props를 ul,li 엘리먼트로 감싸 출력한다

# [10월 6일 학습내용]

## 클래스형 컴포넌트의 일생 알아보기

    * constructor() 함수는 생명주기 함수는 아니지만 클래스형 컴포컨트가 생성될때 호출되고 console.log() 함수보다 먼저 실행, render 함수()보다 나중에 실행된다
    * cocomponentDidMount()도 생명주기 함수이고 render 함수보다 나중에 실행된다
    * componentDidUpadate()도  생명주기 함수이고 화면이 업데이트 되는경우에 실행된다
    * componentWillUnmount()도 생명주기 함수이고 컴포넌트가 화면에서 떠날 떄 실행된다

## 영화 앱 만들기 워밍업

    1. App 컴포넌트 비운다
    2. isLoading state를 추가하고 마운트되면 true여야만 하므로 state = { isLoading : ture }; 를 작성
    3. isLoading state에 따라 Loding...같은 문장을 출력하기위해 render 안에
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loding...' : 'We are ready'} </div> 추가하기
    4. setTimeout 함수를 사용하여 6초 후에 isLoading state를 false로 바꾼다
    5. 영화 데이터는 로딩되면 state에 저장하면 된다
    6. state 안에 movies: []를 추가해주면 5번이 가능해진다

## 영화 API 사용해보기

    1. axois 설치하기 (npm install axios 입력)
    2. yts/lt/api 사이트에 들어가서 List Movie 클릭
    3. 'https://yts.mx/api/v2/list_movies.json'를 복사해주고 브라주저를 통해 들어가준다
    4. 크롬 웹 스토어에서 json viewer 확장 도구 설치해준다
    5. 설치 후 3번에 있는 주소로 다시 들어가서 코드 확인
    6. 노마드코더영화 API 깃허브인 'https://github.com/serranoarevalo/yts-proxy'에 접속한다
    7. 'https://yts.mx/api/v2/list_movies.json'에 접속한 후 코드 확인
    8. 'https://yts.mx/api/v2/movie_details.json'를 접속한 후 코드 확인
    ※ 아무것도 안나온다 이유는 API가 movir_id하는 조건을 요구해서
    9. 'https://yts.mx/api#movie_details' 접속한 후 movie_id가 필수라는 것을 알 수 있다.
    10. APP 파일 맨위에 axios를 import한 다음, componentDidMount()함수에서 axios로 api를 호출하면 된다
    11. axios.get() 함수의 인자에 URL을 전달여 API를 호출하므로 axios 임포트한다
    12. [Network] 탭을 연 다음 영화 앱을 새로 고침하고 Name 이라는 항목에 list_movies.json가 있는지 확인
    13. getMovies()함수를 만들고, 그 함수 안에서 axios.get()이 실행되도록 작성한 후 실행
    ※ 이떄 자바스크립트에게 'getMovies 함수는 시간이 좀 필요해'라고 말해야만 데이터를 제대로 잡을수 있는데 필요한 키워드는 async, await다
    14. getMovies()함수에 async와 await를 교재에 나오는대로 붙히기

## 영화 데이터 화면에 그리기

    1. axios.get()으로 잡은 영화 데이터가 movies 변수 안에 들어 있으니까 console.log(movies)를 통해 출력하기
    2. devTools에 콘솔창 확인
    3. data키를 펼쳐서 moveis배열까지 펼쳐보기
    4. console.log(movies)를 console.log(movies.data.data.movies)로 바꾸고 Console탭 확인
    5. console.log에 '.data.data.movies'를 지우고 교재에 있는것처럼 코드를 입력하다
    6. this.setState({movies:movies})와 같이 작성하고 console.log()는 제거
    7. this.getState({movies})로 수정
    ※ {movies:movies}는 키와 대입할 변수의 이름이 같으니까 {movies}로 축약가능
    8. isLoading state를 false에서 true로 업데이트하기 위해 교재와 같이 코드 작성

## Movie 컴포넌트 만들기

    1. src 폴더에 Movie.js 파일을 만들고 교재와 같이 코드를 작성
    2. yts-proxy.now.sh/list_movies.json에 접속해서 사용할 영화 데이터를 확인
    3. id를 Movie.propTypes에 추가한다 
    ※ id는 자료형이 Number이므로 반드시 있어야 하기때문에 PropTypes.number.isRequired로 추가
    4. year,title,summary,poster를 각각 Movie.propTypes에 추가
    ※ 자료형 주의해서 추가할것
    5. https://yts-proxy.now.sh/list_movies.json에 접속하고 medium_cover_image 키와 키값을 확인
    6. https://yts.It.api#list_movies에 접속한 다음 Encoding Paramerters에 보면 sort_by라는 Parameter를 볼 수도 있다
    7. Parameter와 Parameter에 넘겨줄 값을 = 으로 이어서 작성하면 된다
    8. https://yts-proxy.now.sh/list_movies.json?sort_by=rating에 접속해서 영화데이트를 확인
    9. axios.get()에 https://yts-proxy.now.sh/list_movies.json?sort_by=rating을 입력
    
# [9월 29일 학습내용]

## map() 함수로 만든 컴포넌트에 Key props 추가하기

    const foodLike = [
    {
    id:1, <= id라는 값을 원소에 추가하여 key값이 없다는 부분 해결
    name: "chikin",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",}
    ];
* 값을 널는 이유는 컴포넌트가 서로 다르다는 것을 알려주기 위해서이다

## 음식 데이터에 rating 추가하기
    const foodLike = [
    {
    id:1, 
    name: "chikin",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",}
    rating: 5,
    ];

## prop=types 설치하고 적용하기

### 1 . prop=types 설치
    npm install prop=types 
    package.json 파일을 열어 depaendencies 키에 있는 값을 살펴본다
    아래 내용을 확인할 수 있다
    "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "prop-types": "^15.7.2" <= 자동으로 입력이 된다
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"

### 2 . prop=types 적용
    
    기존에 있던 App.js에 import PropTypes form 'prop-types'; 추가하고
    Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: ProTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    };를 추가한다

## prop-types 경고 해결하기 (1)

    rating: PropTypes.string.isRequired 부분에서 rating.number로 바꾸어주면 해결된다

## prop-types 경고 해결하기 (2)

    Food 컴포넌트에 전달하는 picture props의 이름을 image로 바꾸면 사진이 안나온다
    그 이유는 image라는 props가 없기때문에 발생하는 오류이다

## 클래스형 컴포넌트 작성하기

    import React from 'react';
    class App extends React.Component { <= App 클래스는 React.Component 클래스를 상속받는다

    }
    exprot default App;

## render() 함수 사용

    import React from 'react';
    class App extends React.Component {
        render() {
            return <h1> I'm class compoent</h1>;
        }
    }
    exprot default App;

## state 정의하고 count값 추가하고 사용하기

    import React from 'react';
    class App extends React.Component {
        state = {
            count: 0,
        };
        render() {
            return <h1> The number is :{this.state.count}</h1>;
        }
    }
    exprot default App;
    * state를 사용함려면 반드시 클래스형 컴포넌트 안에서, 소문자를 이용하여 state라고 적으면 된다

## 버튼을 눌러서 count state 값 변경하기

        render() {
            return (
            <div>
            return <h1> The number is :{this.state.count}</h1>;
            <button>Add</button>
            <button>Minus</button>
            </div>
        )
        }
   render 내용 변경한다


## add() 함수와 minus() 함수 작성하기

    state = {
            count: 0,
    };
     add = () => {
    console.log('add');
    };                      
    minus = () => {
        console.log('minus');
    };

    state 내용을 변경한다.

## 버튼을 누르면 동작하도록 onClick 속성 추가하기

    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
 
   * 버튼 내용 윗 내용으로 바꾸어주면 된다 

# [9월 15일 학습내용]

### 컴포넌트 여러 개 사용해보기
    Potato 컴포넌트를 Movie로 바꾸고 여러개를 복사해서 붙어놓는다
    그럼 Movie 컴포넌트 여러개를 출력되서 나타난다

### props로 컴포넌트에 데이터 전달하기
    Movie를 Food로 변경하고 Movie 컴포넌트를 삭제하고 Food 컴포넌트를 <Food fav="kimchi"> 내용을 변경한다
    여기서 props의 이름은 fav이고 "kimchi"라는 값을 담아 Food 컴포넌트를 보내는 방식이다
    ※ 주의 : props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호로 값을 감싸야 한다는 점이다

### props 사용하기
    function Food ()안에 props 넣어서 사용이 가능하고 l like kimci에서 kimchi 대신 {props.fav}를 넣어서 사용한다

### 여러 개의 컴포넌트에 props 사용하기
    1. function Food ({fav}) 로 바꾸고 거기에 return  <h1> I like {fav} </h1> 를 넣어주나
    2. Food fav = "음식이름" 이런식으로 여러개 만들면 여러개가 출력이 된다

### 음식 데이터 만들기
    Food fav = "음식이름" 를 삭제하고 const foodILike 를 만들고 거기에 내용으로 name, img를 넣어주는데 img에는 링크를 넣어줘도 된다
    
[9월 8일 학습내용]
# 슈퍼 빠른 create-react-app
## create-react-app으로 앱 만들기
    명령 프롬프트를 실행한 다음 리액트 앱을 만들고 싶은 곳으로 이동하고 명령으로 movie_app_2021라는 폴더를 만들어 본다
    npx create-react-app movie_app_2021 라고 사용한다

## 프로젝트 폴더 선택하기
    VS code를 실행하여 파일 → 폴더열기를 누른 다음 movie_app_2021 폴더를 선택하다

## README.md 파일 수정하기
   README.md 파일을 연 다음, 그 안에 작성되어 있던 내용을 모두 지워, 새로운 내용을 입력한다

## package.json 파일 수정하기
    test, eject 명령어는 사용하지 않아서 삭제한다

## 리액트 앱 실행하기
    명령 프롬프트에서 루트 폴더로 이동한 다음  npm start를 입력한다
    명령 프롬프트에 'Compiled Successfully!'와 같은 문장이 보인 다음, 크롬 브라우저가 켜지고 다음 화면이 나타나면 OK야! 리액트 앱이 실행되었다.
    리액트 종료하려면 Ctrl + c를 누르면 리액트 앱이 종료된다.

## 로컬 저장소 초기화하기
    git init 명령어를 실행하면 저장소를 초기화한다

## 깃허브에 저장소 만들기
    깃허브 저장소 만들게 페이지에 접속해서 깃허브랑 vscode를 연결하고 커밋을 하고 푸쉬를 한다
    푸쉬가 완료되면 깃허브 저장소를 확인해보면 변경된 README.md 파일의 내용도 보인다

## 리액트 앱 프로젝트 폴더 살펴보기
    VScode의 왼쪽 화면을 이용해서 movie_app_2021폴더를 열어서 public 폴더, src 폴더를 살펴본다

## index.js 파일 수정하기
    src 폴더의 index.js 파일을 열고 다음과 같이 삭제선으로 표시한 코드를 삭제하고 수정한다

## App.js 파일 수정하기
    src 폴더의 App.js 파일을 수정한다 다음과 같이 삭제선으로 표시한 코드를 삭제하고 수정한다
    새로운 내용을 추가한다

## 리액트 동작 원리 알아보기
    리액트는 우리가 작성한 프로젝트 폴더에 있는 코드를 자바스크립트를 이용하여 해석하고 해석한 결과물을 index.html로 끼워 넣는다
    그래서 index.html 파일에 없던 <div>Hello!!!!<!div>가 리액트 앱을 실행하면 생긴다

## 리액트 앱 실행 복습하기
    App.js 파일을 열고 App() 함수와 App*() 함수가 반환하는 값을 본다

## index.js 파일로 컴포넌트의 사용 알아보기
    <App />부분을 ReactDOM.render(<App />, document.getElementById('root'));로 바꾼다
    APP 컴포넌트가 변환하는 것들을 화면에 그릴 수 있고 App 컴포넌트가 그려질 위치는 ReactDOM.render() 함수의 두 번쨰 인자로 전달하면 된다.
    리액트는 컴포넌트와 함께 동작하고, 리액트 앱은 모두 컴포넌트로 구성된다.

## Potato 컴포넌트 만들기
    1. src 폴더 안에 Potato.js라는 이름의 파일을 만들고 맨위에 importReact from'react';를 입력한다
    2. Potato 컴포넌트의 기본플이 완성되는데 function Potato() {}를 입력한다
    3. return <h3>I love potato </h3>;를 입력한다
    4. export defult Potato;를 입력한다

## Potato 컴포넌트 사용하기
    1. src폴더 안에 Potato.js 파일의 내용을 복사한다
    2. App 파일 안에 붙혀 넣기를 하고 import 부분을 import Potato from './Potato';라고 고치면 된다

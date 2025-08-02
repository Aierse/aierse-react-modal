# @aierse/react-modal

리액트 모달 라이브러리

더욱 자세한 문서를 보고싶다면 아래 링크를 참조하세요.

[[Modern][리액트] 한국인이 만든 국산 모달 소개](https://aierse.tistory.com/19)

# 설치

> npm i @aierse/react-modal

# 사용법

## 모달 열기/닫기 제어

```js
import Modal from "@aierse/react-modal";
import { useState } from "react"

const [isOpen, setIsOpen] = useState(false)

<Modal open={isOpen}>
 <YourHTMLCode />
</Modal>
```

## 모달 백드롭 제어

```js
import Modal from '@aierse/react-modal'
import { useState } from 'react'

const [isOpen, setIsOpen] = useState(false)

function openChange() {
  setIsOpen((prev) => !prev)
}

;<Modal
  open={isOpen}
  backdropProps={{
    onClick: openChange,
  }}
>
  <YourHTMLCode />
</Modal>
```

## 모달 CSS 및 백드롭 CSS

```js
import Modal from "@aierse/react-modal";
import { useState } from "react"
import styles from 'app.module.css'

const [isOpen, setIsOpen] = useState(false)

function openChange() {
    setIsOpen((prev) => !prev)
}

<Modal
  open={isOpen}
  backdropProps={{
    onClick: openChange
    className: styles.backdrop
  }}

  className={styles.modal}
>
 <YourHTMLCode />
</Modal>
```

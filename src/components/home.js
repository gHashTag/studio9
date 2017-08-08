import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs'
import './react-tabs.css'

const styles = {
 tabs: {
  flex: 1,
  marginLeft: 90,
  marginRight: 90
 },
 tab: {
  marginTop: 130,
 },
 panel: {
   padding: 10
 }
}

export default class Home extends Component {
  render() {

    const { tabs, tab, panel} = styles

    return (
     <Tabs style={tabs}>
         <TabList>
           <Tab style={tab}>Классы</Tab>
           <Tab>Семинары</Tab>
         </TabList>

        <TabPanel style={panel}>
          <p>Мы объединились под хэштегом #шактиМамочки так как в каждом своём движении созерцаем акты рождения и ясно осознаем, что совершенствование души и тела приближает нас к Богу, а путь к нему обнимает наши сердца в ожерелье любви на одноимённых вечерах.</p>
        </TabPanel>
        <TabPanel style={panel}>
         <p>Показ хендмейд украшений @jewelry_pkate российского дизайнера ЕКАТЕРИНЫ ПАЧКОВСКОЙ @ekaterina_pachkovskaya откроет сундук сокровищ вечера с серебренными элементами Натальи Март @theSilverElements, единственных в своём роде, изготовленных на Коста-Брава и в Барселоне, с презентацией от арт-директора в России КАРИНЫ ЗАЛЯТДИНОВОЙ @karinaYogasnake 19:30-20:00 улучшит восприятие познания бесконечного, вечного и не тленного МАРИНА НЕГАНОВА @neganova_marina практикой нега йога</p>
        </TabPanel>
      </Tabs>
    )
  }
}

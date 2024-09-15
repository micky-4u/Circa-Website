import React from 'react'
import Member from '../components/member/member'

import wiz from '../assets/images/wiz.png'
import pat from '../assets/images/pat.png'
import jos from '../assets/images/jos.png'
import mike from '../assets/images/mike.png'
import sam from '../assets/images/sam.png'
import emma from '../assets/images/emma.png'



function Teams() {

  const team_members =[

    {
      "name":"AMANIAMPONG AMANKWAH WISDOM",
      "role":"CHIEF EXECUTIVE OFFICER",
      "image":wiz
    },
    {
      "name":"PATRICK DOGBATSE",
      "role":"Software Engineer",
      "image":pat
    },
    {
      "name":"AKPAH SAMUEL",
      "role":"Software Engineer",
      "image":sam
    },
    {
      "name":"JOSIAH OKORNOE",
      "role":"Software Engineer",
      "image":jos
    },
    {
      "name":"MICHAEL LARYEA",
      "role":"Software Engineer",
      "image":mike
    },
    {
      "name":"AGYEI-BOAKYE EMMANUEL",
      "role":"RESEARCH OFFICER",
      "image":emma
    }
  
  ]

  return (
    <section id="Team" className='teams'>

      <div className='teammembers'>

        {team_members.map((member) =>(
          <Member name={member.name} role={member.role} image={member.image} />
        ))}
      </div>
    </section>
  )
}

export default Teams
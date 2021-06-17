import React from 'react'
import { Menu , Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="C:/Users/ASUS/Desktop/.jpeg" />
                <Dropdown pointing="top left" text="Mustafa">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign out" />


                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

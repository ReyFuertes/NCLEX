import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss']
})
export class FooterNavigationComponent implements OnInit {
  logoLink = "/"
  logoTitle = "Expert Academy Logo"
  logoUrl = "https://picsum.photos/200/75?app-logo"

  appLink = "/"
  appTitle = "Expert Academy"
  appLabel = "www.expertacademy.com"

  helpText = "Help"

  copyrightText = "©2019 NCLEX ExpertAcademy. All rights reserved."

  socialMedias = [
    {
      id: "1",
      link: "https://www.facebook.com",
      title: "Facebook",
      imageUrl: "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-128.png"
    },
    {
      id: "2",
      link: "https://www.twitter.com",
      title: "Twitter",
      imageUrl: "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-128.png"
    },
    {
      id: "3",
      link: "https://www.linkedin.com",
      title: "LinkedIn",
      imageUrl: "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-128.png"
    }
  ]

  navlinks = [
    {
      id: "1",
      link: "/institution",
      title: "Institution",
    },
    {
      id: "2",
      link: "/terms-of-use",
      title: "Terms of use",
    },
    {
      id: "3",
      link: "/contact",
      title: "Contact",
    },
    {
      id: "4",
      link: "/privacy-policy",
      title: "Privacy Policy",
    },
    {
      id: "5",
      link: "/faq",
      title: "FAQ",
    },
    {
      id: "6",
      link: "/blog",
      title: "Blog",
    }
  ]
  

  constructor() { }

  ngOnInit() {
  }

}

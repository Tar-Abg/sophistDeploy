"use strict";(self.webpackChunkschool=self.webpackChunkschool||[]).push([[592],{6634:(I,o,u)=>{u.d(o,{o:()=>d});var l=u(2340),i=u(1841),n=u(8002),a=u(7716);let d=(()=>{class p{constructor(e){this.http=e,this.url=`${l.N.apiUrl}/Student`}getProfileInfo(e,r){let t=new i.LE;return t=t.append("userId",e),t=t.append("tutorId",r),this.http.get(`${this.url}/GetTutorProfileInfo`,{params:t}).pipe((0,n.U)(s=>s.result.profileInfo))}getInstitutions(e,r){let t=new i.LE;return t=t.append("userId",e),t=t.append("tutorId",r),this.http.get(`${this.url}/GetInstitutions`,{params:t}).pipe((0,n.U)(s=>s.result.institutions))}getTutorCertificates(e,r){let t=new i.LE;return t=t.append("userId",e),t=t.append("tutorId",r),this.http.get(`${this.url}/GetTutorCertificates`,{params:t}).pipe((0,n.U)(s=>s.result.certificatesAndQualifications))}getAvailabilities(e,r){let t=new i.LE;return t=t.append("userId",e),t=t.append("tutorId",r),this.http.get(`${this.url}/GetAvailabilities`,{params:t}).pipe((0,n.U)(s=>s.result))}getTutorSubjects(e,r){let t=new i.LE;return t=t.append("userId",e),t=t.append("tutorId",r),this.http.get(`${this.url}/GetTutorSubjects`,{params:t}).pipe((0,n.U)(s=>s.result.subjects))}getReviews(e,r){let t=new i.LE;return t=t.append("userId",e),t=t.append("tutorId",r),this.http.get(`${this.url}/GetReviews`,{params:t}).pipe((0,n.U)(s=>s.result.reviews))}getRatings(e,r){let t=new i.LE;return t=t.append("userId",e),t=t.append("tutorId",r),this.http.get(`${this.url}/GetRatings`,{params:t}).pipe((0,n.U)(s=>s.result.ratings))}}return p.\u0275fac=function(e){return new(e||p)(a.LFG(i.eN))},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);
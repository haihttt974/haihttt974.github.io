export interface GraduationPhoto { src: string; alt: string; caption?: string; position?: string }
export interface GraduationLetter { eyebrow: string; title: string; salutation: string; paragraphs: string[]; closing: string; signature: string; writtenAt?: string }
export interface GraduationJourneyItem { id: string; year: string; period?: string; eyebrow: string; title: string; summary: string; story: string; lesson: string; highlight?: string; tags?: string[]; image: string; imageAlt: string; imageCaption?: string; imagePosition?: string }
export interface GraduationMapLocation { venueName: string; address: string; embedUrl: string; directionsUrl: string }
export interface GraduationEventDate { localDate: string; dateTimeISO: string; timeZone: string; displayTime: string }
export interface GraduationData {
  graduateName: string; classYear: string; eyebrow: string; headline: string; introduction: string;
  degree?: string; major?: string; university?: string; ceremonyDateISO?: string; ceremonyDateLabel?: string; ceremonyTime?: string;
  venueName?: string; venueAddress?: string; dressNote?: string; mapUrl?: string; rsvpUrl?: string; contactLabel?: string; contactUrl?: string;
  heroImage?: string; heroImageAlt?: string; heroImagePosition?: string; photos: GraduationPhoto[]; gratitudeTitle: string; gratitudeBody: string; closingMessage: string;
  eventDate: GraduationEventDate; letter: GraduationLetter; journey: GraduationJourneyItem[]; mapLocation: GraduationMapLocation;
}

export const graduationData: GraduationData = {
  graduateName: "Lê Duy Hải", classYear: "2026", eyebrow: "Graduation Invitation · Special Issue 01",
  headline: "Một cột mốc khép lại. Một chương mới bắt đầu.",
  introduction: "Sau bốn năm theo đuổi Công nghệ Thông tin, từ những dòng code đầu tiên đến các sản phẩm full-stack, Hải trân trọng mời bạn hiện diện trong ngày đánh dấu cột mốc tốt nghiệp — và cùng mở ra chương tiếp theo.",
  degree: "Kỹ sư Công nghệ Thông tin", major: "Công nghệ Thông tin", university: "Trường Đại học Công nghệ TP.HCM (HUTECH)",
  ceremonyDateISO: "2026-12-20T08:00:00+07:00", ceremonyDateLabel: "Chủ nhật · 20 tháng 12, 2026", ceremonyTime: "08:00 — 10:00",
  venueName: "HUTECH — Thu Duc Campus", venueAddress: "Phân khu Đào tạo E1, Khu Công nghệ cao, Phường Tăng Nhơn Phú, TP.HCM", dressNote: "Trang phục lịch sự · Tông màu sáng",
  mapUrl: "https://www.google.com/maps/dir/?api=1&destination=HUTECH%20Thu%20Duc%20Campus", rsvpUrl: "", contactLabel: "Liên hệ Hải", contactUrl: "mailto:ld.hai.insys@gmail.com",
  heroImage: "/graduation/hero.webp", heroImageAlt: "Chân dung tốt nghiệp của Lê Duy Hải", heroImagePosition: "50% 35%",
  // TODO: Dữ liệu ngày giờ minh họa; thay đồng thời localDate và dateTimeISO bằng ngày thật.
  eventDate: { localDate: "2026-12-20", dateTimeISO: "2026-12-20T08:00:00+07:00", timeZone: "Asia/Ho_Chi_Minh", displayTime: "08:00 · Chủ nhật" },
  // TODO: Dán URL iframe từ Google Maps → Share → Embed a map và link chỉ đường thật.
  mapLocation: { venueName: "HUTECH — Thu Duc Campus", address: "Phân khu Đào tạo E1, Khu Công nghệ cao, Phường Tăng Nhơn Phú, TP.HCM", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4185210673036!2d106.7830318745854!3d10.855738189297929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e7ea103df%3A0xb6cf10bb7d719327!2zSFVURUNIIC0gxJDhuqFpIGjhu41jIEPDtG5nIG5naOG7hyBUUC5IQ00gKFRodSBEdWMgQ2FtcHVzKQ!5e0!3m2!1svi!2s!4v1783766509006!5m2!1svi!2s", directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=HUTECH%20Thu%20Duc%20Campus" },
  // TODO: Nội dung thư mẫu; cá nhân hóa trước khi phát hành.
  letter: {
    eyebrow: "A NOTE OF GRATITUDE · 2026", title: "Lá thư dành cho những người đã đồng hành", salutation: "Gửi gia đình, thầy cô, bạn bè và tất cả những người tôi trân quý,",
    paragraphs: [
      "Ngày hôm nay không chỉ đánh dấu việc tôi hoàn thành một chặng đường học tập. Đây còn là dịp để tôi nhìn lại những lần được giúp đỡ, những lời động viên đúng lúc và cả những bài học đã âm thầm tạo nên con người tôi ở hiện tại.",
      "Cảm ơn gia đình vì đã luôn là nơi tôi có thể trở về, kể cả trong những ngày tôi nghi ngờ chính mình. Cảm ơn thầy cô vì không chỉ trao kiến thức, mà còn dạy tôi cách kiên nhẫn, trách nhiệm và nghiêm túc với lựa chọn của mình.",
      "Cảm ơn những người bạn đã cùng tôi đi qua bài tập, dự án, những đêm thức muộn và cả những khoảnh khắc tưởng như rất bình thường nhưng sau này sẽ trở thành ký ức đáng nhớ nhất.",
      "Tấm bằng này mang tên tôi, nhưng hành trình dẫn đến nó có dấu chân của rất nhiều người. Tôi biết mình vẫn còn nhiều điều phải học, nhưng tôi bước vào chương tiếp theo với lòng biết ơn, sự tò mò và niềm tin rằng mọi trải nghiệm vừa qua đều có ý nghĩa."
    ], closing: "Cảm ơn vì đã là một phần trong hành trình của tôi.", signature: "Lê Duy Hải", writtenAt: "Thành phố Hồ Chí Minh · 2026"
  },
  // TODO: Journey minh họa; thay story, lesson và image bằng dữ liệu cá nhân khi sẵn sàng.
  journey: [
    { id:"chapter-01",year:"2022",period:"CHƯƠNG 01",eyebrow:"THE BEGINNING",title:"Những dòng code đầu tiên",summary:"Từ sự tò mò trước một giao diện nhỏ, tôi bắt đầu học cách biến ý tưởng thành thứ có thể nhìn thấy và sử dụng.",story:"Giai đoạn đầu không có những dự án lớn, chỉ có rất nhiều lần thử, sai và bắt đầu lại. Chính những bài tập nhỏ giúp tôi hiểu kỹ năng đến từ việc kiên trì giải quyết từng vấn đề một.",lesson:"Đừng sợ bắt đầu bằng những điều nhỏ.",highlight:"01 · NỀN MÓNG ĐẦU TIÊN",tags:["Curiosity","HTML & CSS","First Steps"],image:"/graduation/journey/chapter-01.svg",imageAlt:"Minh họa bàn làm việc với màn hình hiển thị những dòng code đầu tiên",imageCaption:"FRAME 01 · WHERE IT STARTED",imagePosition:"center" },
    { id:"chapter-02",year:"2023",period:"CHƯƠNG 02",eyebrow:"LEARNING TOGETHER",title:"Học cách đi cùng một tập thể",summary:"Những bài tập nhóm đầu tiên cho tôi hiểu rằng một sản phẩm tốt luôn được tạo ra từ sự lắng nghe và trách nhiệm.",story:"Tôi học cách trình bày ý tưởng rõ ràng, nhận phản hồi mà không phòng thủ và hoàn thành phần việc đúng lúc. Khác biệt trong cách suy nghĩ trở thành thứ giúp kết quả cuối cùng tốt hơn.",lesson:"Làm việc cùng nhau là cùng chịu trách nhiệm cho kết quả.",highlight:"TEAMWORK · COMMUNICATION",tags:["Collaboration","Feedback","Responsibility"],image:"/graduation/journey/chapter-02.svg",imageAlt:"Minh họa nhiều người cùng trao đổi quanh một bản thiết kế dự án",imageCaption:"FRAME 02 · BETTER TOGETHER",imagePosition:"center" },
    { id:"chapter-03",year:"2024",period:"CHƯƠNG 03",eyebrow:"FROM IDEA TO REALITY",title:"Dự án đầu tiên trở thành sản phẩm",summary:"Lần đầu tiên một dự án không chỉ chạy trên máy của tôi, mà được sử dụng và nhận phản hồi từ người khác.",story:"Khoảnh khắc ấy giúp tôi nhận ra khoảng cách giữa sản phẩm chạy được và sản phẩm thật sự hữu ích. Tôi bắt đầu quan tâm hơn đến trải nghiệm, hiệu năng và khả năng bảo trì.",lesson:"Hoàn thành code chỉ là một phần; tạo ra giá trị mới là mục tiêu.",highlight:"FIRST REAL-WORLD PROJECT",tags:["Product Thinking","UX","Delivery"],image:"/graduation/journey/chapter-03.svg",imageAlt:"Minh họa sản phẩm số chuyển từ bản phác thảo thành giao diện hoàn chỉnh",imageCaption:"FRAME 03 · SHIPPED, NOT JUST BUILT",imagePosition:"center" },
    { id:"chapter-04",year:"2025",period:"CHƯƠNG 04",eyebrow:"GROWING THROUGH CHALLENGES",title:"Trưởng thành qua những lần chưa hoàn hảo",summary:"Không phải mọi kế hoạch đều diễn ra đúng dự tính, nhưng mỗi lần vấp giúp tôi hiểu rõ hơn cách mình học và làm việc.",story:"Tôi học cách chia vấn đề lớn thành những bước nhỏ, tìm sự trợ giúp đúng lúc và không đánh đồng một kết quả chưa tốt với năng lực của bản thân.",lesson:"Khó khăn không làm hành trình kém giá trị; nó tạo nên chiều sâu.",highlight:"RESILIENCE · PATIENCE",tags:["Problem Solving","Resilience","Growth"],image:"/graduation/journey/chapter-04.svg",imageAlt:"Minh họa con đường nhiều lớp dẫn về phía ánh sáng",imageCaption:"FRAME 04 · KEEP MOVING FORWARD",imagePosition:"center" },
    { id:"chapter-05",year:"2026",period:"CHƯƠNG 05",eyebrow:"THE MILESTONE",title:"Khép lại một chương, bắt đầu một hành trình mới",summary:"Tốt nghiệp không phải đích đến cuối cùng, mà là cột mốc để tôi bước tiếp với một phiên bản trưởng thành hơn.",story:"Tôi rời chặng đường này với kiến thức, ký ức và những câu hỏi mới. Phía trước còn nhiều điều chưa biết, nhưng tôi đã học được cách bắt đầu, thích nghi và tiếp tục.",lesson:"Luôn giữ sự tò mò và can đảm bước vào những điều chưa biết.",highlight:"CLASS OF 2026",tags:["Graduation","New Chapter","Forward"],image:"/graduation/journey/chapter-05.svg",imageAlt:"Minh họa cánh cửa mở ra một đường chân trời mới",imageCaption:"FRAME 05 · THE NEXT CHAPTER",imagePosition:"center" }
  ],
  photos: [
    { src:"/graduation/frame-01.webp",alt:"Mũ tốt nghiệp và bằng cuộn trên nền giấy sáng",caption:"The objects that mark a milestone" },
    { src:"/graduation/frame-02.webp",alt:"Hành lang đại học trong nắng sớm",caption:"A path, still unfolding" },
    { src:"/graduation/frame-03.webp",alt:"Đôi tay người tốt nghiệp bên laptop và sổ ghi chép",caption:"Built one line at a time" },
    { src:"/graduation/frame-04.webp",alt:"Áo và mũ tốt nghiệp màu xanh navy bên tường đá",caption:"Class of 2026" }
  ],
  gratitudeTitle:"A Note of Gratitude",gratitudeBody:"Cảm ơn gia đình, thầy cô, bạn bè và những người đã đồng hành.",closingMessage:"Thank you for being part of the journey"
};
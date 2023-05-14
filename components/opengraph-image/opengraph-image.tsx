export const OpenGraphImage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#0009E7",
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      <div style={{ display: "flex" }}>
        <svg
          width="1686"
          height="444"
          viewBox="0 0 1686 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "317px",
            width: "1200px",
          }}
        >
          <path
            d="M80 230.85H151.643V250.149H103.391V267.068H144.76V285.309H103.391V305.528H152.426V325.356H80V230.85Z"
            fill="white"
          />
          <path
            d="M162.345 292.046V230.85H185.736V292.839C185.736 302.092 190.495 308.299 201.99 308.299C212.829 308.299 217.979 301.69 217.979 292.437V230.85H241.37V292.046C241.37 313.851 228.289 327.069 201.98 327.069C175.671 327.069 162.325 314.115 162.325 292.046H162.345Z"
            fill="white"
          />
          <path
            d="M253.688 230.85H298.895C317.665 230.85 331.941 240.504 331.941 258.08C331.941 269.046 326.526 277.114 315.55 280.942V281.344C323.745 284.115 327.975 289.275 329.297 298.655C331.275 311.08 329.953 322.977 333.262 324.161V325.346H310.527C308.02 323.887 308.412 312.794 306.963 303.404C305.778 294.68 301.284 289.921 291.238 289.921H277.1V325.346H253.708V230.85H253.688ZM294.665 272.62C303.918 272.62 308.676 268.263 308.676 261.125C308.676 253.987 304.182 249.365 295.194 249.365H277.09V272.63H294.665V272.62Z"
            fill="white"
          />
          <path
            d="M338.55 278.299C338.55 250.012 356.654 229 385.205 229C413.757 229 431.998 250.012 431.998 278.299C431.998 306.586 413.894 327.599 385.205 327.599C356.517 327.599 338.55 306.586 338.55 278.299ZM408.205 278.299C408.205 261.116 400.676 247.897 385.342 247.897C370.009 247.897 362.343 261.116 362.343 278.299C362.343 295.483 370.137 308.564 385.342 308.564C400.548 308.564 408.205 295.483 408.205 278.299Z"
            fill="white"
          />
          <path
            d="M441.906 230.85H483.412C494.388 230.85 502.573 234.022 508.125 239.701C513.412 245.126 516.585 252.518 516.585 261.242C516.585 279.082 504.825 291.116 484.998 291.116H461.734V325.346H441.906V230.85ZM461.734 275.528H481.561C491.607 275.528 496.894 269.976 496.894 261.389C496.894 252.802 491.343 247.515 481.825 247.515H461.734V275.538V275.528Z"
            fill="white"
          />
          <path
            d="M548.847 288.873L517.388 230.85H538.273L552.548 258.873C555.456 264.552 558.756 272.355 558.756 272.355H559.02C559.02 272.355 562.584 264.562 565.365 258.873L579.377 230.85H599.468L568.009 288.873V325.356H548.847V288.873Z"
            fill="white"
          />
          <path
            d="M603.698 230.85H679.698V246.976H651.284V325.356H632.122V246.976H603.708V230.85H603.698Z"
            fill="white"
          />
          <path
            d="M689.353 230.85H708.514V267.861H745.653V230.85H764.814V325.356H745.653V283.723H708.514V325.356H689.353V230.85Z"
            fill="white"
          />
          <path
            d="M775.271 278.299C775.271 250.012 792.984 229 820.87 229C848.755 229 866.34 250.012 866.34 278.299C866.34 306.586 848.765 327.471 820.87 327.471C792.974 327.471 775.271 306.586 775.271 278.299ZM846.777 278.299C846.777 259.402 838.318 244.725 821.007 244.725C803.696 244.725 794.835 259.392 794.835 278.299C794.835 297.206 803.686 311.737 821.007 311.737C838.328 311.737 846.777 297.069 846.777 278.299Z"
            fill="white"
          />
          <path
            d="M876.788 230.85H896.214L927.674 283.586C930.719 288.736 934.283 296.804 934.283 296.804H934.547C934.547 296.804 934.018 287.023 934.018 280.414V230.85H952.916V325.356H934.41L902.157 273.149C899.112 268.126 895.421 260.067 895.421 260.067H895.157C895.157 260.067 895.685 269.976 895.685 276.595V325.366H876.788V230.85Z"
            fill="white"
          />
          <path
            d="M80.793 347.367H122.298C133.274 347.367 141.46 350.54 147.012 356.219C152.299 361.643 155.471 369.035 155.471 377.759C155.471 395.599 143.712 407.633 123.885 407.633H100.62V441.863H80.793V347.357V347.367ZM100.62 392.045H120.448C130.494 392.045 135.781 386.493 135.781 377.906C135.781 369.319 130.229 364.032 120.712 364.032H100.62V392.055V392.045Z"
            fill="white"
          />
          <path
            d="M164.988 347.367H208.344C226.585 347.367 238.746 357.942 238.746 373.667C238.746 384.77 233.596 393.23 221.435 396.529V396.921C230.159 399.437 234.653 404.46 235.838 415.955C237.16 429.301 236.631 439.484 239.931 440.933V441.863H221.562C219.183 440.806 218.919 430.231 218.126 420.058C217.333 409.748 211.517 403.932 199.62 403.932H184.16V441.863H164.998V347.357L164.988 347.367ZM184.15 389.137H204.506C214.944 389.137 220.104 383.722 220.104 376.183C220.104 368.644 215.208 362.837 205.035 362.837H184.15V389.137Z"
            fill="white"
          />
          <path
            d="M277.746 347.367H297.573L330.883 441.872H310.928L304.583 421.781H270.48L264.273 441.872H244.847L277.755 347.367H277.746ZM274.975 407.113H299.952L291.493 379.884C289.906 374.861 287.664 365.344 287.664 365.344H287.4C287.4 365.344 285.02 374.861 283.434 379.884L274.975 407.113Z"
            fill="white"
          />
          <path
            d="M402.124 429.183H401.86C395.388 440.022 386.527 443.861 375.296 443.861C361.02 443.861 349.917 438.701 342.123 430.114C334.329 421.389 329.835 409.229 329.835 394.953C329.835 379.228 335.387 365.481 345.295 356.356C352.962 349.355 363.008 345.517 375.697 345.517C399.49 345.517 413.1 358.598 416.145 377.103H397.375C395.261 367.988 388.26 361.379 376.099 361.379C358.259 361.379 349.398 376.183 349.398 394.953C349.398 413.723 359.571 428.39 375.835 428.39C390.502 428.39 400.156 417.424 400.156 406.977V406.448H377.421V391.643H417.203V441.873H402.8L402.144 429.183H402.124Z"
            fill="white"
          />
          <path
            d="M429.756 411.47V347.367H448.917V411.47C448.917 421.252 453.813 428.125 466.63 428.125C478.791 428.125 484.47 420.988 484.47 411.206V347.367H503.631V411.47C503.631 431.69 491.206 443.459 467.022 443.459C442.837 443.459 429.746 431.954 429.746 411.47H429.756Z"
            fill="white"
          />
          <path
            d="M517.388 347.367H586.916V363.494H536.559V384.643H580.708V400.368H536.559V425.874H587.317V441.863H517.397V347.357L517.388 347.367Z"
            fill="white"
          />
          <path
            d="M672.169 441.873C669.927 439.493 666.49 435.528 662.525 430.642C656.973 438.7 649.443 443.86 640.318 443.86C625.915 443.86 616.662 435.401 616.662 421.918C616.662 409.885 624.985 401.562 636.617 396.147C630.938 387.296 629.352 382.537 629.352 376.849C629.352 364.561 639.525 354.515 654.065 354.515C667.548 354.515 676.007 360.194 676.007 371.561C676.007 381.607 665.697 388.745 655.122 392.838C657.893 396.539 661.33 401.16 665.697 406.849C666.627 408.171 667.685 409.356 668.605 410.55L670.847 403.55C677.055 384.652 679.963 379.365 688.295 379.365H693.847L691.869 399.721C688.56 397.871 686.445 397.077 683.938 397.077C679.973 397.077 677.456 399.848 672.042 414.79C681.295 426.422 689.617 435.802 695.698 441.883H672.169V441.873ZM659.088 426.54C655.122 421.644 650.765 415.838 646.271 409.885C643.765 406.448 641.513 403.275 639.662 400.632C635.824 404.47 634.375 408.827 634.375 413.449C634.375 422.173 639.398 429.173 649.179 429.173C653.145 429.173 656.444 428.38 659.088 426.53V426.54ZM645.997 372.345C645.997 377.632 647.191 381.333 652.87 389.656C657.893 385.426 660.4 380.139 660.4 372.873C660.4 366.392 658.549 360.84 653.399 360.84C648.249 360.84 645.997 365.207 645.997 372.345Z"
            fill="white"
          />
          <path
            d="M726.501 347.367H769.857C788.098 347.367 800.259 357.942 800.259 373.667C800.259 384.77 795.109 393.23 782.948 396.529V396.921C791.672 399.437 796.166 404.46 797.351 415.955C798.673 429.301 798.144 439.484 801.444 440.933V441.863H783.075C780.696 440.806 780.432 430.231 779.638 420.058C778.845 409.748 773.029 403.932 761.133 403.932H745.672V441.863H726.511V347.357L726.501 347.367ZM745.663 389.137H766.019C776.456 389.137 781.616 383.722 781.616 376.183C781.616 368.644 776.721 362.837 766.547 362.837H745.663V389.137Z"
            fill="white"
          />
          <path
            d="M812.547 347.367H882.075V363.494H831.718V384.643H875.867V400.368H831.718V425.874H882.476V441.863H812.557V347.357L812.547 347.367Z"
            fill="white"
          />
          <path
            d="M894.363 347.367H921.329L934.674 394.815C937.984 406.712 940.627 420.322 940.627 420.322H940.892C940.892 420.322 943.408 406.712 946.708 394.815L960.053 347.367H987.41V441.872H969.57V387.678C969.57 380.011 970.364 368.114 970.364 368.114H970.099C970.099 368.114 967.984 379.218 966.006 386.091L949.753 441.872H931.384L915.522 386.091C913.545 379.218 911.43 368.114 911.43 368.114H911.165C911.165 368.114 911.958 380.011 911.958 387.678V441.872H894.383V347.367H894.363Z"
            fill="white"
          />
          <path
            d="M997.867 394.816C997.867 366.529 1015.58 345.517 1043.47 345.517C1071.35 345.517 1088.94 366.529 1088.94 394.816C1088.94 423.103 1071.36 443.988 1043.47 443.988C1015.57 443.988 997.867 423.103 997.867 394.816ZM1069.37 394.816C1069.37 375.919 1060.91 361.241 1043.6 361.241C1026.29 361.241 1017.43 375.909 1017.43 394.816C1017.43 413.723 1026.28 428.253 1043.6 428.253C1060.92 428.253 1069.37 413.586 1069.37 394.816Z"
            fill="white"
          />
          <path
            d="M1089.87 347.367H1165.87V363.493H1137.45V441.872H1118.29V363.493H1089.88V347.367H1089.87Z"
            fill="white"
          />
          <path
            d="M1175.52 347.367H1245.05V363.494H1194.69V384.643H1238.84V400.368H1194.69V425.874H1245.45V441.863H1175.53V347.357L1175.52 347.367Z"
            fill="white"
          />
          <path
            d="M1244.29 271.514H967.72V286.201H1244.29V271.514Z"
            fill="white"
          />
          <path
            d="M1075.37 239.437H1068.9V235.746C1072.42 235.628 1075.53 234.463 1076.14 230.772H1081.21V259.558H1075.37V239.437Z"
            fill="white"
          />
          <path
            d="M1099.67 235.746V235.667H1085.15V230.85H1105.97V235.462C1100.73 240.681 1095.83 249.111 1095.38 259.548H1089.12C1089.49 248.993 1095.21 240.24 1099.68 235.746H1099.67Z"
            fill="white"
          />
          <path
            d="M1105.85 244.343H1117.55V249.445H1105.85V244.343Z"
            fill="white"
          />
          <path
            d="M1126.35 248.152C1130.03 245.303 1134.03 243.296 1134.03 239.604C1134.03 236.912 1132.64 235.071 1129.98 235.071C1126.99 235.071 1125.19 237.196 1125.11 240.936H1119.71C1119.71 234.395 1123.15 230.342 1130.1 230.342C1136.56 230.342 1140 234.513 1140 239.458C1140 244.882 1136.24 247.369 1132.63 249.738C1130.38 251.139 1127.69 253.067 1126.7 254.918H1140.16V259.579H1119.3C1119.5 254.076 1123.02 250.747 1126.34 248.182L1126.35 248.152Z"
            fill="white"
          />
          <path
            d="M1142.05 249.875H1147.54C1147.78 253.41 1149.3 255.574 1153.3 255.574C1156.58 255.574 1158.42 253.811 1158.42 250.874C1158.42 248.103 1156.74 246.497 1153.14 246.497H1151.34V242.238H1153.01C1155.79 242.238 1157.71 240.789 1157.71 238.38C1157.71 236.128 1156.11 234.611 1153.58 234.611C1150.22 234.611 1148.59 236.735 1148.47 239.712H1142.98C1143.19 234.052 1146.78 230.273 1153.58 230.273C1159.67 230.273 1163.56 233.201 1163.56 237.979C1163.56 241.229 1161.43 243.119 1158.52 244.04V244.118C1162.24 244.999 1164.42 247.251 1164.42 251.226C1164.42 257.209 1159.55 260.058 1153.49 260.058C1145.96 260.058 1142.12 256.122 1142.04 249.865L1142.05 249.875Z"
            fill="white"
          />
          <path
            d="M1173.15 251.725V248.876H1178.47V251.363C1178.47 254.251 1179.82 255.377 1182.23 255.377C1184.64 255.377 1185.74 253.967 1185.74 251.441V230.85H1191.68V251.48C1191.68 256.376 1188.77 260.067 1182.72 260.067C1176.67 260.067 1173.14 257.336 1173.14 251.715L1173.15 251.725Z"
            fill="white"
          />
          <path
            d="M1208.62 259.549V257.14H1208.5C1207.07 259.03 1205.43 260.107 1202.49 260.107C1197.83 260.107 1195.2 257.179 1195.2 252.685V238.958H1200.72V251.765C1200.72 254.173 1201.83 255.495 1204.2 255.495C1206.81 255.495 1208.41 253.566 1208.41 250.834V238.948H1213.97V259.539H1208.62V259.549Z"
            fill="white"
          />
          <path
            d="M1217.66 230.85H1223.22V259.558H1217.66V230.85Z"
            fill="white"
          />
          <path
            d="M1227.36 262.006H1229.32C1231.54 262.006 1232.44 260.88 1232.44 259.196C1232.44 258.07 1232.03 256.748 1230.84 253.615L1225.2 238.967H1231.05L1234.16 248.24C1234.82 250.129 1235.51 252.734 1235.51 252.734H1235.59C1235.59 252.734 1236.16 250.12 1236.81 248.24L1239.76 238.967H1245.36L1238.04 260.087C1236.44 264.66 1234.89 266.305 1230.64 266.305H1227.37V262.006H1227.36Z"
            fill="white"
          />
          <path
            d="M1156.42 313.499C1160.1 310.65 1164.11 308.643 1164.11 304.952C1164.11 302.259 1162.72 300.418 1160.06 300.418C1157.07 300.418 1155.27 302.543 1155.19 306.283H1149.8C1149.8 299.743 1153.24 295.689 1160.19 295.689C1166.65 295.689 1170.09 299.86 1170.09 304.805C1170.09 310.229 1166.33 312.716 1162.72 315.086C1160.47 316.486 1157.78 318.415 1156.79 320.265H1170.24V324.926H1149.38C1149.58 319.423 1153.1 316.094 1156.42 313.529V313.499Z"
            fill="white"
          />
          <path
            d="M1172.7 310.571C1172.7 301.377 1177.53 295.639 1184.97 295.639C1192.41 295.639 1197.12 301.338 1197.12 310.571C1197.12 319.804 1192.54 325.542 1184.93 325.542C1177.32 325.542 1172.7 319.716 1172.7 310.571ZM1191.07 310.571C1191.07 304.51 1189.27 300.417 1184.98 300.417C1180.69 300.417 1178.76 304.471 1178.76 310.571C1178.76 316.671 1180.6 320.764 1184.98 320.764C1189.36 320.764 1191.07 316.71 1191.07 310.571Z"
            fill="white"
          />
          <path
            d="M1206.21 313.499C1209.89 310.65 1213.9 308.643 1213.9 304.952C1213.9 302.259 1212.51 300.418 1209.85 300.418C1206.86 300.418 1205.06 302.543 1204.98 306.283H1199.59C1199.59 299.743 1203.02 295.689 1209.98 295.689C1216.44 295.689 1219.88 299.86 1219.88 304.805C1219.88 310.229 1216.12 312.716 1212.51 315.086C1210.26 316.486 1207.57 318.415 1206.58 320.265H1220.03V324.926H1199.17C1199.37 319.423 1202.89 316.094 1206.21 313.529V313.499Z"
            fill="white"
          />
          <path
            d="M1221.91 315.233H1227.4C1227.64 318.767 1229.16 320.931 1233.16 320.931C1236.43 320.931 1238.27 319.169 1238.27 316.231C1238.27 313.46 1236.6 311.855 1233 311.855H1231.19V307.595H1232.87C1235.65 307.595 1237.57 306.146 1237.57 303.738C1237.57 301.486 1235.97 299.968 1233.44 299.968C1230.08 299.968 1228.44 302.093 1228.33 305.069H1222.84C1223.05 299.41 1226.65 295.63 1233.44 295.63C1239.53 295.63 1243.41 298.558 1243.41 303.336C1243.41 306.587 1241.29 308.477 1238.38 309.397V309.475C1242.1 310.357 1244.28 312.609 1244.28 316.584C1244.28 322.566 1239.41 325.416 1233.36 325.416C1225.83 325.416 1221.98 321.479 1221.9 315.223L1221.91 315.233Z"
            fill="white"
          />
          <rect
            x="919.714"
            y="-1.23193"
            width="153.286"
            height="153.286"
            fill="#FF0000"
          />
          <rect
            x="919.714"
            y="71.5796"
            width="153.286"
            height="80.475"
            fill="#FFB340"
          />
          <path
            d="M996.357 96.4878C1010.11 96.4878 1021.27 84.9068 1021.27 70.6209C1021.27 56.3349 1010.11 44.7539 996.357 44.7539C982.6 44.7539 971.448 56.3349 971.448 70.6209C971.448 84.9068 982.6 96.4878 996.357 96.4878Z"
            fill="white"
          />
          <path
            d="M1047.13 96.4878C1061.42 96.4878 1073 84.9068 1073 70.6209C1073 56.3349 1061.42 44.7539 1047.13 44.7539C1032.85 44.7539 1021.27 56.3349 1021.27 70.6209C1021.27 84.9068 1032.85 96.4878 1047.13 96.4878Z"
            fill="white"
          />
          <path
            d="M945.581 96.4878C959.867 96.4878 971.448 84.9068 971.448 70.6209C971.448 56.3349 959.867 44.7539 945.581 44.7539C931.295 44.7539 919.714 56.3349 919.714 70.6209C919.714 84.9068 931.295 96.4878 945.581 96.4878Z"
            fill="white"
          />
          <path
            d="M1022.22 50.502C1036.51 50.502 1048.09 38.9209 1048.09 24.635C1048.09 10.3491 1036.51 -1.23193 1022.22 -1.23193C1007.94 -1.23193 996.356 10.3491 996.356 24.635C996.356 38.9209 1007.94 50.502 1022.22 50.502Z"
            fill="white"
          />
          <path
            d="M970.49 50.502C984.776 50.502 996.357 38.9209 996.357 24.635C996.357 10.3491 984.776 -1.23193 970.49 -1.23193C956.204 -1.23193 944.623 10.3491 944.623 24.635C944.623 38.9209 956.204 50.502 970.49 50.502Z"
            fill="white"
          />

          <rect y="-2.36816" width="153.286" height="153.286" fill="white" />
          <rect y="74.2739" width="76.6428" height="76.6428" fill="#FF8B9D" />
          <rect y="-2.36816" width="76.6428" height="153.286" fill="#FF8B9D" />
          <rect
            x="76.6426"
            y="-2.36816"
            width="76.6428"
            height="153.286"
            fill="#FFB340"
          />
          <path
            d="M22.4476 128.469C52.3785 158.399 100.906 158.399 130.837 128.469L22.4476 20.0793C-7.48329 50.0101 -7.48329 98.5377 22.4476 128.469Z"
            fill="white"
          />
          <path
            d="M130.838 20.0793C100.907 -9.85163 52.3791 -9.85163 22.4482 20.0792L130.838 128.469C160.768 98.5377 160.768 50.0101 130.838 20.0793Z"
            fill="#FFB340"
          />
          <path
            d="M78.5586 150.917H153.285L78.5586 76.7437V150.917Z"
            fill="white"
          />
          <rect
            x="306.571"
            y="-1.23193"
            width="153.286"
            height="153.286"
            fill="white"
          />
          <path
            d="M459.857 75.4109H306.571V63.0126V-1.23193L459.857 75.4109Z"
            fill="#FF8B9D"
          />
          <rect
            x="306.571"
            y="75.4102"
            width="153.286"
            height="76.6428"
            fill="#FFB340"
          />
          <circle cx="383.214" cy="113.732" r="11.4964" fill="white" />
          <rect
            x="613.143"
            y="75.4102"
            width="153.286"
            height="76.6428"
            fill="#FFB340"
          />
          <rect
            x="613.143"
            y="-1.23193"
            width="153.286"
            height="76.6428"
            fill="#FF0000"
          />
          <path
            d="M689.794 -1.23193C731.708 -1.23193 765.759 32.3929 766.428 74.1646C766.094 117.04 731.893 151.82 689.794 152.054H689.375C647.226 151.82 613.143 117.609 613.143 75.4193C613.143 33.2293 647.461 -1.23193 689.794 -1.23193Z"
            fill="#0009E7"
          />
          <path
            d="M708.946 17.9292C731.238 17.9292 749.184 36.0223 749.184 58.1917C749.184 80.3612 732.39 97.2681 711.119 98.4042C717.385 92.9579 721.329 84.9555 721.329 76.0509C721.329 59.7621 708.144 46.4638 691.769 46.4638C682.428 46.4638 674.106 50.7908 668.709 57.5569C669.043 35.6714 686.856 17.9292 708.946 17.9292Z"
            fill="white"
          />
          <path
            d="M708.734 97.0099C709.454 97.0099 710.158 96.9933 710.862 96.96C705.788 101.439 699.177 104.153 691.911 104.153C675.872 104.153 662.96 90.8994 662.96 74.6824C662.96 67.7061 665.333 61.2959 669.326 56.251C669.31 56.4674 669.31 56.6672 669.31 56.8837C669.31 78.9781 686.886 97.0099 708.734 97.0099Z"
            fill="white"
          />
          <circle cx="708.945" cy="58.1657" r="40.2375" fill="white" />
          <circle cx="691.701" cy="75.411" r="30.6571" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M668.831 54.994C674.445 48.7098 682.611 44.7539 691.701 44.7539C708.632 44.7539 722.358 58.4796 722.358 75.411C722.358 84.5004 718.402 92.666 712.119 98.2801C711.072 98.3617 710.013 98.4033 708.945 98.4033C686.723 98.4033 668.708 80.3884 668.708 58.1659C668.708 57.0983 668.75 56.0405 668.831 54.994Z"
            fill="#FFB340"
          />
          <rect
            x="153.286"
            y="49.3667"
            width="153.286"
            height="101.552"
            fill="#FF0000"
          />
          <rect
            x="153.286"
            y="-2.36816"
            width="153.286"
            height="51.7339"
            fill="#0009E7"
          />
          <path
            d="M280.816 -2.36816L306.572 49.3657H254.838L280.594 -2.36816H280.816Z"
            fill="white"
          />
          <path
            d="M266.258 70.1211L306.572 150.917H240.542H153.286L193.6 70.1211L229.781 -2.36816H230.093L266.258 70.1211Z"
            fill="white"
          />
          <path
            d="M179.264 -2.36816L205.02 49.3657H153.286L179.042 -2.36816H179.264Z"
            fill="white"
          />
          <rect
            x="766.429"
            y="-1.23438"
            width="153.286"
            height="153.286"
            fill="white"
          />
          <rect
            x="766.429"
            y="75.4087"
            width="76.6428"
            height="76.6428"
            fill="#FF8B9D"
          />
          <rect
            x="843.685"
            y="-1.23438"
            width="76.0297"
            height="77.256"
            fill="#0009E7"
          />
          <path
            d="M766.429 75.4085C766.429 117.737 800.743 152.051 843.072 152.051V-1.23438C800.743 -1.23438 766.429 33.0798 766.429 75.4085Z"
            fill="#FF0000"
          />
          <path
            d="M919.715 75.4089C919.715 33.0803 885.401 -1.2339 843.072 -1.23391L843.072 152.052C885.401 152.052 919.715 117.738 919.715 75.4089Z"
            fill="#FFB340"
          />
          <rect
            x="459.857"
            y="-1.23193"
            width="153.286"
            height="153.286"
            fill="white"
          />
          <path
            d="M459.857 102.105V-1.23193H613.143V152.054H459.857V102.105ZM570.685 43.0906C570.685 36.8117 565.59 31.7145 559.295 31.7145C553.001 31.7145 547.923 36.8117 547.923 43.0906C547.923 49.3694 553.018 54.4842 559.295 54.4842C565.572 54.4842 570.685 49.3871 570.685 43.0906ZM570.685 77.6949C570.685 71.416 565.59 66.3188 559.295 66.3188C553.001 66.3188 547.923 71.416 547.923 77.6949C547.923 83.9738 553.018 89.0709 559.295 89.0709C565.572 89.0709 570.685 83.9738 570.685 77.6949ZM570.685 112.299C570.685 106.02 565.59 100.923 559.295 100.923C553.001 100.923 547.923 106.02 547.923 112.299C547.923 118.578 553.018 123.675 559.295 123.675C565.572 123.675 570.685 118.578 570.685 112.299ZM524.913 43.0906C524.913 36.8117 519.818 31.7145 513.541 31.7145C507.264 31.7145 502.168 36.8117 502.168 43.0906C502.168 49.3694 507.264 54.4842 513.541 54.4842C519.818 54.4842 524.913 49.3871 524.913 43.0906ZM524.913 77.6949C524.913 71.416 519.818 66.3188 513.541 66.3188C507.264 66.3188 502.168 71.416 502.168 77.6949C502.168 83.9738 507.264 89.0709 513.541 89.0709C519.818 89.0709 524.913 83.9738 524.913 77.6949ZM524.913 112.299C524.913 106.02 519.818 100.923 513.541 100.923C507.264 100.923 502.168 106.02 502.168 112.299C502.168 118.578 507.264 123.675 513.541 123.675C519.818 123.675 524.913 118.578 524.913 112.299Z"
            fill="#FF8B9D"
          />
          <rect
            x="1073"
            y="-0.513672"
            width="153.29"
            height="153.29"
            fill="#0009E7"
          />
          <path
            d="M1226.29 152.776H1073V127.979V-0.513672L1226.29 152.776Z"
            fill="#FF0000"
          />
          <path
            d="M1144.43 39.9913C1131.17 42.4616 1121.08 54.2375 1120.71 68.4667H1073.2C1073.12 68.0775 1073.05 67.6715 1073 67.2654C1073.52 40.3466 1091.59 16.7441 1117.58 5.86492C1127.33 1.77043 1138.18 -0.513672 1149.64 -0.513672C1192.09 -0.513672 1226.29 30.9056 1226.29 68.4667H1178.58C1178.14 52.4102 1165.32 39.5007 1149.64 39.5007C1147.87 39.5007 1146.12 39.6699 1144.43 39.9913Z"
            fill="white"
          />
          <rect
            x="1226.95"
            y="-0.513672"
            width="153.29"
            height="153.29"
            fill="white"
          />
          <path
            d="M1380.24 101.04V152.775H1353.74V152.574L1380.24 101.04Z"
            fill="#0009E7"
          />
          <path
            d="M1380.24 67.7271V101.68H1286.22C1288.56 93.7427 1289.82 85.2061 1289.82 76.3343C1289.82 73.4241 1289.68 70.5491 1289.42 67.7271H1380.24Z"
            fill="#0009E7"
          />
          <path
            d="M1380.24 33.792V67.727H1289.42C1288.24 55.2748 1284.57 43.7044 1279.01 33.792H1380.24Z"
            fill="white"
          />
          <path
            d="M1380.24 -0.160922V33.7917H1279.01C1267.72 13.667 1248.66 0.297649 1226.95 -0.143294V-0.496044C1227.23 -0.513682 1227.53 -0.513672 1227.82 -0.513672H1380.24V-0.160922Z"
            fill="#0009E7"
          />
          <path
            d="M1353.74 101.04V152.775H1337.47H1329.14V152.446L1353.31 101.04H1353.74Z"
            fill="#0009E7"
          />
          <path
            d="M1329.14 152.446V152.775H1300.75V152.574L1328.65 101.04H1329.14V152.446Z"
            fill="#0009E7"
          />
          <path
            d="M1300.75 152.574V152.775H1300.72H1250.25H1230.73V152.574L1299.33 101.04H1300.75V152.574Z"
            fill="#0009E7"
          />
          <path
            d="M1293.66 101.679V102.755H1293.07L1264.67 152.582V152.776H1228.12C1255.02 151.647 1277.71 130.64 1286.22 101.679H1293.66Z"
            fill="#0009E7"
          />
          <path
            d="M1303.59 76.1316C1303.59 33.8018 1269.28 -0.513248 1226.95 -0.513251L1226.95 152.776C1269.28 152.776 1303.59 118.461 1303.59 76.1316Z"
            fill="#FFB340"
          />
          <rect
            x="1379.99"
            y="-0.513672"
            width="153.29"
            height="153.29"
            fill="#FFB340"
          />
          <path
            d="M1379.99 152.776H1533.28V127.979V-0.513672L1379.99 152.776Z"
            fill="white"
          />
          <path
            d="M1451.42 39.9913C1438.16 42.4616 1428.06 54.2375 1427.7 68.4667H1380.19C1380.1 68.0775 1380.04 67.6715 1379.99 67.2654C1380.51 40.3466 1398.58 16.7441 1424.56 5.86492C1434.32 1.77043 1445.16 -0.513672 1456.63 -0.513672C1499.08 -0.513672 1533.27 30.9056 1533.27 68.4667H1485.56C1485.13 52.4102 1472.3 39.5007 1456.63 39.5007C1454.85 39.5007 1453.11 39.6699 1451.42 39.9913Z"
            fill="#FF0000"
          />
          <rect
            x="1533.28"
            y="0.641602"
            width="152.725"
            height="152.725"
            fill="#0009E7"
          />
          <rect x="1533" y="68" width="153" height="85" fill="#FFB340" />
          <circle cx="1609.64" cy="101.822" r="11.4544" fill="white" />
          <path
            d="M1609.5 0.999997C1567.25 0.999995 1533 30.9969 1533 68L1686 68C1686 30.9969 1651.75 0.999999 1609.5 0.999997Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 20,
          paddingLeft: 55,
          paddingRight: 55,
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: 60,
            textTransform: "uppercase",
            marginBottom: 0,
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: 30, marginTop: 0 }}>{description}</p>
      </div>
    </div>
  );
};

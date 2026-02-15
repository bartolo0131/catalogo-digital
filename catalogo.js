// ============================================
// CATALOGO.JS - CON IMÁGENES DE MARCAS
// ============================================
console.log("✅ catalogo.js cargado");

// URLs de imágenes de marcas (imágenes gratis de internet)
const imagenesMarcas = {
  // Imágenes para hombre
  diesel:
    "https://th.bing.com/th/id/OIP.jHyf1nSKTgHwwVbpA23a7wHaHa?w=176&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  nautica:
    "data:image/webp;base64,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",
  invictus:
    "data:image/webp;base64,UklGRiIWAABXRUJQVlA4IBYWAACwbQCdASokAR4BPp1MnkulpCMlJFZrCLATiWVu4Wuw2B/eS8Pxt7HO+ncHPp5/vfpUdILnYNPRganaaaBeZW6v73wj+YmoW97tFO/XnJ/decX2p9gDy3/6f6teXp96/4PsCf0b/D/rh7xX+z5S/2P/kewv0ofRyKoZMMmGTDJhkwyYZMMmGTDJhkwyYY52WwhXmBWndrfUndidQ5IU1AwBoPS3g/X5z+T6l7MmGTDJhQH4RPGIO/Z91tvSNR8FyhQBn9xFIzix3No/xb4t8W4VydGK3U5ENcQ/uM0bWd5p0yj/Qut7IbO/CzEY9T6lnxRZe+8cUnXuppIWbktxesvc+3blR3JV2wODnk6r1EqK5xJqQwd1wI2GvL0qoMHMb/lXI6DpqOhMW7O6oCv9nfXachFxLJ/QH7d/Ckk5MKBkV7szFInJDCz6mIctBCeQQubEw5ZTUMgrUA+n/UtxjMpzYsDNoNS6iltKEb+rZnf4wlEra4x3bsxEsGf1enCtaehJoltQnEbFJv0hZh2WQBK3r98515nBgJKjHeGTZzhgZh/8JvC6bbmno4FhO7eoWEFMVaM8XbsWfAhE6cWrxls57fhph7j0ul+Oq64M79mPb4reWCGB14sD5tDReI9/62/W1bjyIiRKHQdcUqjdTtLty+oxV8Tg/SLQQJkg1CG6ZxUY1UwtPMZ4YDRx0TkA4hgAe+64lKlQ4r7StLuoVP+7ulqBTkKgGQVbxafugThtWiFn+HDvPSd7ae4XEuIqp7DQ4vOo/rQpD5OV4UjKqhjiZf2DrKIxECPDqvMRI+gfhf7D6ywrwzpX9NTzWVKRVrOaBcrKc/q+Y5KhW7QNv7+6lnSuyi1UOoxo8/w7e75CwJv2UAnHenwUxFEbyrDIqw2kh+BLtikl9mbGEzBWrVYGtVkTQw/XhDprk1CKUH0D8a9FT1KYQf+NrSC6lNX4+D65q1fRu18fJAg1aijZkUnuCgC051gRBR+fbIIE7OeVf/npLonikVPzz13L35q9aA8JNX/ns+BDmCmzgS2GvGan/BwmqDqmlzkaWq3Er/8SwkJmO3wozBiVTx2c4R/uuv8XSX8tJIGuH3XaXvXZ0gzHNOZOSsBrQVBWVr4vbng1yTMZhd++G5lO9rv4sxhsU9LEZQhgvhv3pUdmpk5e/Fvi3xb4t8UQAP7+IsAAAAAADSpqeADjE5gx/Uh04GEGzF/TRHE9dhGI/OKzsFvg/GqfZ/FUlKZYUiTKQf5b9Aqjx1UBlX8tpoVyAev1ws8Sd3lEUvMhXOPTv8zl8gv9jElUrfD42Bwx3iwDEZy02FZu3+sZ0TIPFa+TO7D3BSFJwZwMOGYTVn19NftOtvbpo9O1O7KFYrcg5SXKbktyAzKLRMMlZwK58wc1bf2hs2cdq6J0r8hn8FapIPD107XWdl5G1wDBTRmtOjCtQJTVo4eP/wN4OwPFY/SyMvjjczp9TUrnofs+JL18Ke9cgcc/IM7wgDTlqN5kESNdHnuQTpWbM0BhoG6r8QErbmCB/ejKbJbX+nuUNDj6fyZhiAuRS5Mp7eezgrJne1mWdPPq8/YMnB6VHTE0aqXWJmRgy4iGg46h1nhcGGWsNx5fWIUCXqu0sRFGIOK5rgZulQkLkY2RA6WIq1SRbzE14gJ3AQo8mZo4LpUP3yXOKhiUs8Os+rqrY5NYv4KNMEno18SDywsIhQNKoZMFTehxgQ5QHYIYJkWLyybRXQNAwLD8ihbVc3EJ/dYG+bMHIde/JbsnNx+MgtsvsB/1N570KGT865WfxDyNNSaoYoWU/A7Z70eD8GdNlvC8dDMfaylA0P0sr15gtioc6r229v7X+wrWSRd9tXiMgLuVfKTGc6mVTsANrgEYEZkjHjs6IQ3dM5KzA8K/7/XcWVoNTnTvzqQsWXCOOJjg1K0TFpfXxYZ08BVt8GIkfmU26HP68dxNaJua0JqzzbRDKz8uw3HJLOab9VKJsPj9Wn0nIfnb37wzhyaix85FLcVT9y+Uh1PK5bR3y2zE7UZ6PWyWPoWvy3HitqUSYvClS3oKHM5f7bsB+jVdGVi+oK/pIm56woxkxeQjm6DVGOHcv3x/CX31FaNPdaGCMdXkj3Xhx/HjodBbknGfMOLMeM1RfFsevJsYi8y6N61uzNjU84aCOSPYEz71rlyGKmjZv58x5SfYmm17FwcYiEwzAkhZxY8KAKTkg9Tc38rhnftilq8v+ygiuahr20HpK0n8BKaA9zPSd6PVpHflLfHF+8m2LhYcSOjNwjnZe7/a2nIqFBc47rq6PEEX2lwlGz006NQ/GP7lY36egTLzFFudbY0pHBsimaUYdEzCT68YfHqxnrDnWUhlYsh33XfeP8J/iECStQuttvqGDTitmflV3M58if0k0PC0VmtCMJnpmmsgsMEyggSo47YtuNiNjMQZERF+nDN23kU4okThTfoR5BuwyRKsXhK3I7LRK9Eh0pGQuQgcTnXGsKL0o2uixGa0nqOQ/LYVxFmMavpjwpRF/+UyYocJSMgtlO0TLPX/KANKI8HmAbcL6MBq1oDF3yTr4spj+GvhCWDWaH6ZMwy78f3VKb3qzsFoAR0FbrOpsiCT/Dudq1PY5zNWu3uXqyKbK/anYsdeDslwcHdazaXzXUo7S4zOHtEKGbCSSnjmCj79nL1qGLaO9V+/bkW5TzvDjScx+0nRo1rnR7LRI8AEva58a4jqn6W5BsiZ0054kaxiFGpE5ofbojOdDkbVRzIm2+kgBY6kr0/QHqV5bkkXiNm4iFyvPdBKmf6W5ryeBuZjZz2pgA8MDPwILGu6siIdjmylalmVXMU9TWZqmRnj/e4a+Id3PYvc1af+VU/yC9l2uPwIqkpLEWA96SRKXZ6I5sNSkYx/lsN5N1C1njta+JmzZkxi2t2mz4DFKp0Y3gqvPmiAcy/d16vbyibPh1DVB30epcR6JIbHMvWsIkpInNpISn9HOwQN3dJ0pHcbho89DNRJ1GpYBLJXdV9PRjhgeVe9NbG65ikJ6HuXPe7fXtFOVsry/WA+BK49X5QY8p1nR83RcqmnWw/iTwOEP0nxpzkxMSwWCwniu5CTGFd52ye3Y2EdSN4vfEhG+OZHVhCwQjAcFp8SPmyOeb3N8wFTH1Cv79jN5RYpcMAdw8Jo8aJrFiG5Pt0d8aXvHB2xkOsEps2dyOTXiT9C1O+JyLg/QVVIIqV8qUWuCaP38SRgvwQadyzOSgrstvk937UwMnlfCAz9s2mJjU+xa9xmHjewuoH5qRbrJHxIYNaL9C+piQYXjCzMfy9DUAxqnM6OVzjfAJj5gAREjYtvHhmkbrel6sCVMUglF6RODTcWemu85zN9b9OdiEaBFD60h9Bll21uODnMnxZ21X5DZL6/UM4O/ccYb6Uo21JlR5JkuaJhR51sNIUR+KMzamhooR2kiazRDdur9DasR8y1NXs3fmrwK3dpHVUz2ph8woa50ATfeDsKnStVREMe+xNr1SI1N12Y1S8HBH5xyPNV5lr60lIeq/Nt36bcdoz0HJi7fS8BPif12NGbQ8BOQbVHbZJFwJeyN7qd+xW/KF6WBgMgozvdKzqwKXj/gpcwhW+aO33rUND1o1a5Xjiy7nUtwTmDnSkh8A06yVpwo6hzU5csKl/IpPns3Kyyu93183lLVmTYmQnbEQFb9QhDvzEPOnqAj+NM+ChcqnorRtD87xtgOhi2XNFG9Ufr4VWIKL29/emsV2jLVqL32W2OAOF4QrEXK9Caq962KdwGEsX7uaZSuCg6uHdCAs+qk/GpUG1qvHMQ3WkLSOEzBHjzW6z3Lb8DucpEAULNKZJ/d9JqgvRpx1FqXhb8Sl6Ub6iCHiJ/247+Wf95K9quCnJelUz71tQTZw+eAY4YBmrEBORdw7/yG63EAJcsJGNLVVkmZLrU+F+EvW+Y8Y5sCfdnN3eljhtNEWGbi48wgdHYlVKAvUEo/XlJBJ/rmwjhH2XZYMmaWwiaxBY1kF2z8iTVqYbCKtYoejL81w5JT+W0BUlfpB+yYYuZRt1u/syADW8LPucL6MkkjE5AyhIgoALulI6jt9KdVXoa7TntMAQo2ZgLN3fx7RDQHHqfGcFnzqgZosCMPRAf5XDfNiU2OYeXkgnLIRsVQMOTANt3giG6RU0vpFTEE7Mp8cVaQ9IiDeA7CYDPORABjI0NirigB01Vc4srEcdYnpCJpqO3qOZ3L+a0MAXLzMsjiFe+MxCTNV6+RJr7ens+OavRYrQInmgp+ttC/mk2q6N5bM43G//ecVA18uDT5ww+XJnMmnOAC1JWxpQB4rrsicewsOtnhpqy9/KG+9+OPVF3Hh0SZK1EnCi5kyGCqR5qAdvfuMfQv7iqVgpCUuqAqku0jQHvwrqsNY2mYoeDFdOiGVeZXeqPPPpvUjjuLIdKuJEwPQwORWgYwofEJCA+RrhFlrWt/CzPdSsUYDa7qHPoFZZfouHvbyixRr0jR6a8iSkxZeqGjxXSXKuaDmSWhjEp3xbgZf+etqvLCagwzdGDw0ZIX0RNCrlrLWgG8wWd+2vxZ2OgkSQh8avlyGUHYH3Yw3gaJYDFmEy1vexsaZ1QSpqannHSTdIPddvcqSCuej3vr/6F47cKkM1G51WUzdMxwpnsH7CpvKyIHDu2dAEcTxgJumg3LGDgigGeu5XlVso7eFGv0MKT5OPZayx02qAxxPMxwnQrGPTXq7bNqpxxct3EyXhuiAa7EIp/Q0qfy/uqJ7reNaiSbeb3yUt35Nvpzl8uj+lczwZ3GzgZbNgDqnvq7xeqzb6RPW41bv98mgDvUyhPJruUyxV31xdBbY5untYQeycV2550XEu4xEt9vssZmdvWKnYZ28YnmRobfWjhSzXyzNZQgOFNZ4FjUVqjykCOmZzHRA5WWGZxWPwLcIOGgBYGE2Pu7PVMXle7DcJbSkCKor3IIrEXmPUGKYOWYqAK76UVtAMSqF6D9qTwCWo0Egucb4zyPthb5H0wBtWXcEhO3ax4irg+tGXhwJXsGG6d5dqIl/quapt0AGu/LYAhE4bZUxmLQNDR2hZAZyc3F/b7EQxYEJ8pX2/kxV5f55LOS2PJ2CXuRFduPRXlGjJGocZ0shvnhdTW9Gcf0dDHS+vj/msaP3RyPBafRy+PnXdsNjmFeaiLQG7BytOZAezZRsj+HkPeXsq7d23ZZaNG+Ir9CcXKSKHsJjp1IRi6slBcK1ABnZVeTSn5wERq4Tko+r5iDK2iQx76GRyJyd3+J7yk7FWcJPnWWOhoxcUFvA4QyX83rlRL+yDAxW/GdHm53DWS54eNXSoFrmDuC8OKSDFV0AugcD3c5y7ZONgL8MyFOtdsZMXierEW/QS+Cr270oRt5srnWdxJVb6Alehyazt83AiJ66vOBVOHJDYhAVKolrGl7LuD/vgGGbHoznF/MUiO8ko26PSacUO33nMGyfZdIUMTefS7eJKdO43SF9RG05B36gzxkS9F+9tFy3Cb5oDjWYuaCQwouDJHY275VEWC107JCpSN7QR8w7TuNC/FMw5mIJg3TsvxSdP9DzevwJlnONQRE1NxeLoIJV5WwF9yZfVXPW8HyuKzQT2imT0221gEK/+KTxHc/olZ/0HhDOPq/pQ0oHJ6AslSiZcdhqKG+TMwtXVEO+L7TXDD3v7g1Y9+hP4tAmujmP2d9bfau5qUxpNhsriyVFkdTXkcqoT5btSQGlOpuGiDneMthtHZ9j+4E5Y3YGhICU7Fi9OHLaQzQRjnNzzHkx+Xom1Rf2mjGXN6bD/K149Xk1kZc+rTvLrXcrA1+O/w2d3s/6a/qihd7MIKdisvwkOzjQA1kFf2JBYt1yG3JrXIvowbc1mblsJWLAUJsv1XDUnPsY/49KmeQJxXl7gO7Bi8cKVUF2sr2P3VSGVNDputB/wjyNqQQVem3YHm7IO4yLr9LVpEJUnytnbURSHnVo+ORKMmgMBrM3uyT3MzhDyFhP3JeTyaG6IGB4v6VJrP+ex3QWudySSfOhgCtWj7ZdKytPfNCVyNU9mDGIrY4UbkFQCqkBXOSw75JKzGmc4tlpk7V0BbWdkPCs93pK8CAvLTPciWCah7rokVhgTkorNxcbuda7fRYVNwpAbuxPOpy9G48UWRj3whwJDwRw9O1zfieA/S9ljMEkNT55Afg1V4WioiN49g+pgqaupanl2cr0YEe+0p+sqFDodPT+k2eQcQwV/XsaiYmXNx8rnlCbnX7Lc0zFC6Ho1VgY1NcMV/cwMEs+lVG1vBXxM6l3oC8qFUdK8wnDLXWgGhj62DoAIJsncxmja3bvNbGjDelCi9i97JehkvD8HBz4Ah4+ik8SrF7O3emwdwOn62TlVidonWeBr7TnYQD0qminijPrLEZfzqGP2UrjG1jw8rb2bNvE5FevUgjYCUA+u+6/+/GfX2Tm+3/2FCm959pfJdbzajpLgwxKj4xbNeIOqmw3eX5OPd5RqsSfR/Irbt2YQsizHmrH9AZCvlfnHhbZTlNGN2ZZ0oKbKQ86wUJ4oY0Q6JjmLDb5Mwm1V6E2dnw8kOOc5p0daOs6PspRfbw+QgVshM1/rf9MJu8G8tUYNtzb/gSbNkVyeb3we9Jw77KJhOYQLHYwICDh9YAXYuyKfWZHvQxW5SZ6DivR2ET3IvgIIuDQ2T1pfoGpel6Qe9xK+ZwZD/SvOWhwlPkibTYj/24P1x/Z7XuwuguqpkqR+GAnVQJpjX1rLQ/9CWgGQv/rwcBWsRonxUJFd+NcJcjwHJEHw8cWi6OJFLCkEpowuQXc0V6HPFHalzOJVTFlXR7T1TpbkhWbMa/UMPb2kHUzfAfAtUt1uvi87I+op8+rsLcZtWV+32avd1U/B+cWzdK6VovPsikcR7YP/rfYcrDJ3nr9ZelD9Y31LaoZclYd3Y5TdTwQutyxPwLkpctmyGe7z2/plRjWMGQFXxWY+EVNBFSVSlorF4DVxvJ2+VSmcKcxiHp+KzpcvuUcpV2TCvpA8xv8fLR8Y/RAlYe02+T4d0pmtI55mwKg0QWQOulw3Un9QZgOyRNpT0WORaXSATW8YIkBM63pY09XmnuxcENL5G8/Ewp66/svSaQFA6pVM5jZejlhwLp1/oY6J9aTlDIOQku3SwC4Z0NLF4HcBJApq3arGENTmfpkGXnoHz3A+nhEqjzs7U24UfaP7/+g71qmBRiVxk43/ihOYAEIw78rKkFo/dlCyh7CXWeLdH/pU0YKJcBmTHgIhwKHXu8oQYaX63pOQzz2zBh8VeZEzOrWiwdKOgVzy2J5ZZv229T2CrmoZCueoxNKx2zRJXyk6jO8eWNECDpirit5/5QYb6bIoNw7zxA5WAV6XnONpv4X4WpsVdEUplwkNo5yJI/MMQoWu1SOsIW3FYPBKWWKvRJ/eQ7/ALx6Vkm4v6qMWTbdRdmIPVyjk4i8jW3piF9NiiPY3WL+mcXQ3MNH40YR619uhc+dCv3iSlo8Z4xRIGoPZBXazSo47xVBq7/MQccJhNXWa8FrFR1dsDH3BfVRAAzO2SAAC4ACz9bgAAAA==",
  acqua:
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop&auto=format",
  million:
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&h=200&fit=crop&auto=format",
  boss: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",

  // Imágenes para mujer
  blackopium:
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
  jadore:
    "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=200&h=200&fit=crop&auto=format",
  goodgirl:
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop&auto=format",
  vie: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=200&h=200&fit=crop&auto=format",
  chanel:
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=200&h=200&fit=crop&auto=format",
  flowerbomb:
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&h=200&fit=crop&auto=format",

  // Imagen por defecto
  default:
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&h=200&fit=crop&auto=format",
};

// DATOS DE PRODUCTOS (SIN PRECIOS)
const productos = {
  hombre: [
    {
      id: 1,
      nombre: "DIESEL PLUS",
      marca: "Diesel",
      descripcion:
        "Es una excelente opción para hombres que buscan un aroma fuerte y atractivo.",
      imagen: imagenesMarcas.diesel,
      destacado: true,
    },
    {
      id: 2,
      nombre: "NAUTICA",
      marca: "Voyage",
      descripcion: " Aromas frescos, cítricos, con notas marinas o amaderadas.",
      imagen: imagenesMarcas.nautica,
      destacado: true,
    },
    {
      id: 3,
      nombre: "JEAN PAUL",
      marca: "Gaultier",
      descripcion:
        "Fragancia o producto de cuidado personal con aromas innovadores y provocativos",
      imagen: imagenesMarcas.invictus,
      destacado: false,
    },
    {
      id: 4,
      nombre: "ACQUA DI GIO",
      marca: "Giorgio Armani",
      descripcion: "Fragancia acuática fresca inspirada en el Mediterráneo",
      imagen: imagenesMarcas.acqua,
      destacado: false,
    },
    {
      id: 5,
      nombre: "ONE MILLION",
      marca: "Paco Rabanne",
      descripcion: "Amaderada con notas de canela, moderna y atrevida",
      imagen: imagenesMarcas.million,
      destacado: false,
    },
    {
      id: 6,
      nombre: "HUGO BOSS BOTTLED",
      marca: "Hugo Boss",
      descripcion: "Clásica masculina especiada y elegante",
      imagen: imagenesMarcas.boss,
      destacado: false,
    },
  ],
  mujer: [
    {
      id: 1,
      nombre: "BLACK OPIUM YSL",
      marca: "Yves Saint Laurent",
      descripcion: "Fragancia oriental dulce con notas de café y vainilla",
      imagen: imagenesMarcas.blackopium,
      destacado: true,
    },
    {
      id: 2,
      nombre: "J'ADORE DIOR",
      marca: "Dior",
      descripcion: "Fragancia floral femenina elegante y sofisticada",
      imagen: imagenesMarcas.jadore,
      destacado: true,
    },
    {
      id: 3,
      nombre: "GOOD GIRL",
      marca: "Carolina Herrera",
      descripcion: "Fragancia seductora para la mujer moderna",
      imagen: imagenesMarcas.goodgirl,
      destacado: false,
    },
    {
      id: 4,
      nombre: "LA VIE EST BELLE",
      marca: "Lancôme",
      descripcion: "Fragancia floral dulce y alegre",
      imagen: imagenesMarcas.vie,
      destacado: false,
    },
    {
      id: 5,
      nombre: "CHANEL N°5",
      marca: "Chanel",
      descripcion: "El clásico floral aldehído, icónico y eterno",
      imagen: imagenesMarcas.chanel,
      destacado: true,
    },
    {
      id: 6,
      nombre: "FLOWERBOMB",
      marca: "Viktor&Rolf",
      descripcion: "Explosión floral intensa y romántica",
      imagen: imagenesMarcas.flowerbomb,
      destacado: false,
    },
  ],
};

// FUNCIÓN PARA CARGAR CATÁLOGO
function cargarCatalogo(genero) {
  console.log(`📦 Cargando catálogo para: ${genero}`);

  const contenedor = document.getElementById(`catalogo-${genero}`);
  if (!contenedor) {
    console.error(`❌ No se encontró #catalogo-${genero}`);
    return;
  }

  // Mostrar loading
  contenedor.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando catálogo ${genero === "hombre" ? "para hombre" : "para mujer"}...</p>
        </div>
    `;

  setTimeout(() => {
    const productosGenero = productos[genero] || [];

    if (productosGenero.length === 0) {
      contenedor.innerHTML = `
                <div class="no-productos">
                    <p>😔 No hay productos disponibles</p>
                    <button onclick="cargarCatalogo('${genero}')">Reintentar</button>
                </div>
            `;
      return;
    }

    // Crear HTML de productos
    let html = "";

    productosGenero.forEach((producto, index) => {
      const nombreSeguro = producto.nombre.replace(/'/g, "\\'");

      html += `
                <div class="producto-card ${producto.destacado ? "destacado" : ""}">
                    ${producto.destacado ? '<div class="badge-destacado">⭐ MÁS VENDIDO</div>' : ""}
                    <div class="producto-imagen-container">
                        <img src="${producto.imagen}" 
                             alt="${producto.nombre}" 
                             class="producto-imagen"
                             onerror="this.src='${imagenesMarcas.default}'">
                        <div class="marca-logo">${producto.marca}</div>
                    </div>
                    <div class="producto-info">
                        <h3>${producto.nombre}</h3>
                        <p class="producto-marca">${producto.marca}</p>
                        <p class="descripcion">${producto.descripcion}</p>
                        <button onclick="contactar('${nombreSeguro} - ${producto.marca}')" class="btn-whatsapp">
                            💬 SOLICITAR INFORMACIÓN
                        </button>
                    </div>
                </div>
            `;
    });

    // Añadir mensaje de "¿No encontraste lo que buscabas?"
    html += `
            <div class="mensaje-personalizado">
                <div class="mensaje-contenido">
                    <span class="mensaje-icono">🔍</span>
                    <h3>¿NO ENCONTRASTE LO QUE BUSCABAS?</h3>
                    <p>Pregúntanos personalmente, tenemos muchas más opciones que no están en el catálogo.</p>
                    <button onclick="contactar('Consulta personalizada - No encontré lo que buscaba')" class="btn-personalizado">
                        💬 PREGUNTAR AHORA
                    </button>
                    <p class="mensaje-nota">Estamos para ayudarte a encontrar la fragancia perfecta para ti</p>
                </div>
            </div>
        `;

    contenedor.innerHTML = html;

    console.log(
      `✅ Catálogo ${genero} cargado: ${productosGenero.length} productos`,
    );
  }, 800);
}

// CARGAR AUTOMÁTICAMENTE
document.addEventListener("DOMContentLoaded", function () {
  console.log("📄 DOM cargado");

  const url = window.location.href;

  if (url.includes("hombre")) {
    cargarCatalogo("hombre");
  } else if (url.includes("mujer")) {
    cargarCatalogo("mujer");
  }
});

window.cargarCatalogo = cargarCatalogo;

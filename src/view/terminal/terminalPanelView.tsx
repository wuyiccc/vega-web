import React from 'react'
export const Terminal = () => {
  const xtermRef: any = React.useRef(null)

  React.useEffect(() => {
    // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
    if (xtermRef && xtermRef.current && xtermRef.current.terminal) {
      xtermRef.current.terminal.writeln('Hello, Molecule!')
    }
  }, [])

  return (
    <div style={{ margin: '10px 18px', backgroundColor: 'black' }}>
      Terminal
      {/*<XTerm*/}
      {/*  ref={xtermRef}*/}
      {/*  options={{*/}
      {/*    allowTransparency: true,*/}
      {/*    theme: {*/}
      {/*      background: 'var(--panel-background)'*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  )
}

//! { "noRuntime": true }

export function test(a: i32[]): void {
  a[0];
  a[0x1];
  a[ 2 ];
  a[ 0x03 ];
  let i: i32 = 4;
  a[i];
  a[i + 1];
}

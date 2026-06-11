collectionColorCodes = [
    '#2563EB', // Deep Blue
    '#10B981', // Emerald Green
    '#F59E0B', // Amber
    '#F43F5E', // Rose Red
    '#8B5CF6', // Violet
  ];

  selectColor: string = this.collectionColorCodes[0];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.collectionColorCodes.length;

      this.selectColor = this.collectionColorCodes[this.currentIndex];
      console.log(this.selectColor);
      this.cdr.detectChanges();
    }, 2000);
  }

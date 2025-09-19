

const OverviewPage = () => {
    const { data, error, isLoading } = useGetDateByCountryCodeQuery('NO');

    
    console.log(data);
    
    return (
        <>
       <Box bg="teal.100">
            <Heading mb="1" size="4xl">Oversikt over helligdager i {year}, måned {month}</Heading>
            {data?.filter((publicHoliday : PublicHolidayType) => {
                const date = parse(publicHoliday.date, "yyyy-MM-dd", new Date());
                return date.getMonth() + 1 === Number(month);
            })
            .map((publicHoliday: PublicHolidayType) => (
                <HolidayDetails
                key={publicHoliday.date} 
                publicHoliday={publicHoliday}
                />
            ))};
        </Box>
        </>
    )
}

export default OverviewPage;
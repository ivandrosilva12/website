import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';

function Nav() {
    let { t } = useTranslation()

    return (
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">

            <Link href="/services">
                <a className="mr-5 hover:text-gray-900">{t("common:header-services")}</a>
            </Link>
            <Link href="/products">
                <a className="mr-5 hover:text-gray-900">{t("common:header-products")}</a>
            </Link>
            <Link href="/news">
                <a className="mr-5 hover:text-gray-900">{t("common:header-news")}</a>
            </Link>
            <Link href="/events">
                <a className="mr-5 hover:text-gray-900">{t("common:header-events")}</a>
            </Link>
            <Link href="/about">
                <a className="mr-5 hover:text-gray-900">{t("common:header-about")}</a>
            </Link>
            <Link href="/contact-us">
                <a className="mr-5 hover:text-gray-900">{t("common:header-contact-us")}</a>
            </Link>
        </nav>
    )
}

export default Nav;